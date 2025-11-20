// pages/posts.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.slice(0, 10).map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      );
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>Here are posts fetched from JSONPlaceholder API:</p>

        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </div>
  );
}
