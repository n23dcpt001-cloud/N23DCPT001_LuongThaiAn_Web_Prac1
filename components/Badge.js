export default function Badge({ label, color = "indigo" }) {
  const colorClass =
    color === "indigo"
      ? "bg-indigo-100 text-indigo-700"
      : "bg-gray-100 text-gray-700";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${colorClass}`}>
      {label}
    </span>
  );
}