// pages/about.tsx
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p>This page demonstrates reusable buttons.</p>

        {/* Three buttons with different sizes and shapes */}
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </main>
    </div>
  );
}
