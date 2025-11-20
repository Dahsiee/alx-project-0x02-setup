// pages/posts.tsx
import Header from "@/components/layout/Header";

export default function Posts() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>This is the posts page content.</p>
      </main>
    </div>
  );
}
