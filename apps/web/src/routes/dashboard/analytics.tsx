import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/analytics')({
  component: AnalyticsComponent,
});

function AnalyticsComponent() {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-2xl">Analytics</h2>
      <div className="rounded-lg border bg-white p-6 dark:bg-gray-800">
        <h3 className="mb-4 font-medium text-lg">Traffic Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Page Views</span>
            <span className="font-semibold">45,678</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Unique Visitors</span>
            <span className="font-semibold">12,345</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Bounce Rate</span>
            <span className="font-semibold">32%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
