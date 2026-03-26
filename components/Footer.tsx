import { config } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-xs tracking-widest uppercase text-muted">
          © {new Date().getFullYear()} {config.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${config.email}`}
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
