import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/')({
  component: BlogListComponent,
});

function BlogListComponent() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with TanStack Router',
      date: '2024-01-15',
    },
    { id: 2, title: 'Building Modern React Apps', date: '2024-01-10' },
    { id: 3, title: 'TypeScript Best Practices', date: '2024-01-05' },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 font-bold text-3xl">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            className="rounded-lg border bg-white p-6 dark:bg-gray-800"
            key={post.id}
          >
            <h2 className="mb-2 font-semibold text-xl">
              <a
                className="hover:text-blue-600 dark:hover:text-blue-400"
                href={`/blog/${post.id}`}
              >
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
