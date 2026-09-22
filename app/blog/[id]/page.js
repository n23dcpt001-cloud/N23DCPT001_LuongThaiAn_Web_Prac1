async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <a
        href="/"
        className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Back to Blog
      </a>

      <article className="rounded-xl border bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-medium text-indigo-600">
          User #{post.userId}
        </p>

        <h1 className="text-3xl font-bold capitalize">
          {post.title}
        </h1>

        <p className="mt-6 leading-7 text-gray-600">
          {post.body}
        </p>
      </article>
    </main>
  );
}