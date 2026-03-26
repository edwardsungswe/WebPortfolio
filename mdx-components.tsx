import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-serif font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-semibold mt-6 mb-3 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-sans font-semibold mt-5 mb-2 text-foreground">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-foreground/80">{children}</p>
    ),
    a: ({ children, href }) => (
      <a href={href} className="underline underline-offset-4 hover:text-foreground transition-colors">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-foreground/80">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-foreground/80">{children}</ol>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-foreground/10 px-1.5 py-0.5 rounded">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-foreground/5 rounded-lg p-4 mb-4 overflow-x-auto font-mono text-sm">{children}</pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-foreground/30 pl-4 italic text-foreground/60 mb-4">{children}</blockquote>
    ),
    ...components,
  }
}
