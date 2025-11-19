import Header from "@/components/layout/Header";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p>This is the about page content.</p>
      </main>
    </div>
  )
}