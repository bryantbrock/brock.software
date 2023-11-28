import Link from "next/link";

export default function Page() {
  return (
    <main className="center mt-28">
      {/* Info */}
      <section>
        <h1>Consulting</h1>
        <p className="mt-6 text-lg">
          Our team, led by Bryant Brock, can consult you on your next web or
          mobile application. We have 5+ years of experience designing,
          developing, and delivering web and mobile applications to companies of
          all sizes and types. We can help you with:
        </p>
        <ul className="mt-2 ml-2 text-lg list-disc list-inside leading-relaxed">
          <li>Ecommerce</li>
          <li>Service or product marketplaces</li>
          <li>Custom software</li>
          <li>Advisement on latest technologies</li>
        </ul>
        <p className="mt-6 text-lg">
          If your's isn't listed above, reach out to us using the{" "}
          <Link href="/contact" className="link">
            contact page
          </Link>{" "}
          and we may be able to help you out.
        </p>
        <div className="mt-6 p-4 flex gap-3 items-center bg-gray-100 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <p className="text-lg">
            Send us a message through the{" "}
            <Link href="/contact" className="link">
              contact page
            </Link>{" "}
            to get started!
          </p>
        </div>
      </section>
    </main>
  );
}
