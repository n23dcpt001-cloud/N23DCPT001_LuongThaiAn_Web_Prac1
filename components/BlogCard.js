import Badge from "./Badge";

export default function BlogCard({ post }) {
  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">
      <Badge label={post.category} />

      <h2 className="mt-4 line-clamp-2 text-xl font-bold">
        {post.title}
      </h2>

      <p className="mt-3 line-clamp-3 text-gray-600">
        {post.body}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          User #{post.userId}
        </span>

        <a
          href={`/blog/${post.id}`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Read More
        </a>
      </div>
    </article>
  );
}