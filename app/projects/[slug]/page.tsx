import { notFound } from "next/navigation";
import { config, projects } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — ${config.name}` };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  // Dynamically import the MDX file
  const contentPath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);
  const fileExists = fs.existsSync(contentPath);

  let Content: React.ComponentType | null = null;
  if (fileExists) {
    try {
      const mod = await import(`@/content/projects/${slug}.mdx`);
      Content = mod.default;
    } catch {
      Content = null;
    }
  }

  return (
    <div className="px-8 pt-32 pb-24 max-w-3xl">
      <AnimatedSection delay={0.1}>
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
        >
          ← Projects
        </Link>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-10 mb-12">
          <p className="font-mono text-xs text-muted mb-3">{project.year}</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-bold mb-6">
            {project.title}
          </h1>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs border border-border px-2 py-0.5 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase border border-foreground/30 px-4 py-2 text-muted hover:border-foreground hover:text-foreground transition-colors"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase border border-foreground/30 px-4 py-2 text-muted hover:border-foreground hover:text-foreground transition-colors"
              >
                Live →
              </a>
            )}
          </div>
        </div>
      </AnimatedSection>

      {Content && (
        <AnimatedSection delay={0.3}>
          <div className="border-t border-border pt-10 prose-custom">
            <Content />
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
