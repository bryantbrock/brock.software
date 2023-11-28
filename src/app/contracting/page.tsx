import Link from "next/link";

export default function Page() {
  return (
    <main className="center mt-28">
      {/* Info */}
      <section>
        <h1>Contracting</h1>
        <p className="mt-6 text-lg">
          Our team has many years of experience and is lead by Bryant Brock. To
          work with us, please use the{" "}
          <Link href="/contact" className="link">
            contact page
          </Link>{" "}
          to reach out to us. Send us an email to bryant@brock.software or
          LinkedIn if you prefer.
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
