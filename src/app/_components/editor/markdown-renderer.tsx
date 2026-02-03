import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
    content?: string | null;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
    if (!content) return null;

    return (
        <div className="prose
        dark:prose-invert
        max-w-none

        prose-h2:mt-6
        prose-h3:mt-4
        prose-p:leading-7

        prose-pre:bg-muted
        prose-pre:border
        prose-pre:border-border
        prose-pre:rounded-lg

        prose-code:bg-muted
        prose-code:px-1
        prose-code:py-0.5
        prose-code:rounded">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    );
};
