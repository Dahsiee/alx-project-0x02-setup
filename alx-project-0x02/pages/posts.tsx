// pages/posts.tsx
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps, type PostApiResponse } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
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

// ✅ Next.js data fetching at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostApiResponse[] = await res.json();

  // Map API response into PostProps shape
  const posts: PostProps[] = data.slice(0, 10).map((post) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}
