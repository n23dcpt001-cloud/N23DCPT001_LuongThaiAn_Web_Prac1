export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">
          MyBlog
        </div>

        <div className="flex gap-6 text-sm">
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/about">About</a>
          <a href="/subscribe">Subscribe</a>
        </div>
      </nav>
    </header>
  );
}