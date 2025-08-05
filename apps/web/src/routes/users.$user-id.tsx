import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/users/$userId')({
  component: UserProfileComponent,
});

function UserProfileComponent() {
  const { userId } = Route.useParams();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 font-bold text-3xl">User Profile</h1>
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <p className="text-lg">
          User ID:{' '}
          <code className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700">
            {userId}
          </code>
        </p>
      </div>
    </div>
  );
}
