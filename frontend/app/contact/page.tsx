export default function ContactPage() {
  return (
    <main className="px-8 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact</h1>

      <p className="text-gray-700 leading-relaxed max-w-xl mb-4">
        If you&#39;d like to collaborate or have any questions, feel free to reach out.
      </p>

      <ul className="text-gray-700 space-y-2">
        <li>
          Email:{" "}
          <a href="mailto:your@email.com"
            className="text-blue-600 hover:underline"
          >
            your@email.com
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/eralpcolakk"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            github.com/username
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/eralpcolakk"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/eralpcolakk
          </a>
        </li>
      </ul>
    </main>
  );
}
