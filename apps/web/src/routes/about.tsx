import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 font-bold text-3xl">About Us</h1>
      <p className="text-lg">
        Welcome to our application built with TanStack Router and React!
      </p>
    </div>
  );
}
