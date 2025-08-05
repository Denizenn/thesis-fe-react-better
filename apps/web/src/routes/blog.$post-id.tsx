import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/$postId')({
  component: BlogPostComponent,
});

function BlogPostComponent() {
  const { postId } = Route.useParams();

  // Mock data - in real app, you'd fetch based on postId
  const post = {
    title: 'Getting Started with TanStack Router',
    content: 'This is the content of the blog post...',
    date: '2024-01-15',
    author: 'John Doe',
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <nav className="mb-6">
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href="/blog"
        >
          ← Back to Blog
        </a>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="mb-4 font-bold text-4xl">{post.title}</h1>
          <div className="text-gray-600 dark:text-gray-400">
            <span>By {post.author}</span> • <span>{post.date}</span>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            Post ID: <code>{postId}</code>
          </p>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}
