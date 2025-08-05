import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayoutComponent,
});

function DashboardLayoutComponent() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 font-bold text-3xl">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar Navigation */}
        <nav className="space-y-2">
          <a
            className="block rounded-lg bg-blue-100 px-3 py-2 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            href="/dashboard"
          >
            Overview
          </a>
          <a
            className="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="/dashboard/analytics"
          >
            Analytics
          </a>
          <a
            className="block rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="/dashboard/settings"
          >
            Settings
          </a>
        </nav>

        {/* Main Content Area */}
        <main className="md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
