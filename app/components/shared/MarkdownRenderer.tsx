'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown (tables, task lists, strikethrough)
// import remarkPrism from 'remark-prism'; // For syntax highlighting (requires installation and setup)

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // Add remarkPrism here if installed and configured
        // components={{
        //   code({ node, inline, className, children, ...props }) {
        //     const match = /language-(\w+)/.exec(className || '');
        //     return !inline && match ? (
        //       <pre className={className} {...props}>
        //         <code className={className}>{children}</code>
        //       </pre>
        //     ) : (
        //       <code className={className} {...props}>
        //         {children}
        //       </code>
        //     );
        //   },
        // }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
