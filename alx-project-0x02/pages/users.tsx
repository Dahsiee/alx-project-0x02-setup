// pages/users.tsx
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <p>Here are users fetched from JSONPlaceholder API:</p>

        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </div>
  );
}

// ✅ Next.js data fetching at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Map API response into UserProps shape
  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: `${user.address.street}, ${user.address.city}`,
  }));

  return {
    props: {
      users,
    },
  };
}
