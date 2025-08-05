import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  component: DashboardIndexComponent,
});

function DashboardIndexComponent() {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-2xl">Dashboard Overview</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 dark:bg-gray-800">
          <h3 className="mb-2 font-medium text-lg">Total Users</h3>
          <p className="font-bold text-3xl text-blue-600">1,234</p>
        </div>
        <div className="rounded-lg border bg-white p-6 dark:bg-gray-800">
          <h3 className="mb-2 font-medium text-lg">Revenue</h3>
          <p className="font-bold text-3xl text-green-600">$12,345</p>
        </div>
      </div>
    </div>
  );
}
