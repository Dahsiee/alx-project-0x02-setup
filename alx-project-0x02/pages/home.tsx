import Header from "@/components/layout/Header";
import Card from "@/components/common/Card"
export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>This is the home page content.</p>
        <Card title="First Card" content="This is the content of the first card"/>
        <Card title="Second Card" content="This is the second card content"/>
      </main>
    </div>
  )
}