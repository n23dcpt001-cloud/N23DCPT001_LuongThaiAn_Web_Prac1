import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  const postsWithCategory = posts.map((post) => ({
    ...post,
    category: `Category ${post.userId}`,
  }));

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
  <section className="mx-auto max-w-6xl px-6 py-12">
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Latest Articles
      </h1>

      <p className="mt-3 text-gray-600">
        Discover the latest articles and stories from our blog.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {postsWithCategory.slice(0, 12).map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  </section>
</main>
    </>
  );
}