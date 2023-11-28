import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="center mt-28">
      {/* Info */}
      <section>
        <h1>Web apps</h1>
        <p className="mt-6 text-lg">
          All web-based applications are built using{" "}
          <Link href="https://nextjs.org/" target="_blank" className="link">
            Next.js
          </Link>
          . This foundation provides a number of benefits:
        </p>
        <ul className="mt-2 ml-2 text-lg list-disc list-inside leading-relaxed">
          <li>
            <strong>Fast-paced development</strong>; it is opnionated allowing
            you to skip a ton of configuration headaches.
          </li>
          <li>
            <strong>Portability</strong>; it is well known in the web
            development world and can easily be passed on from developer to
            developer.
          </li>
          <li>
            <strong>Perfomance</strong>; it comes exteremely optimized right out
            of the box giving users a pleasant eperience when using the
            software.
          </li>
        </ul>
        <p className="mt-6 text-lg">
          In addition, all web apps are hosted on{" "}
          <Link href="https://vercel.com/" target="_blank" className="link">
            Vercel
          </Link>{" "}
          and the backends are managed using the well-crafted{" "}
          <Link href="https://www.prisma.io/" target="_blank" className="link">
            Prisma
          </Link>{" "}
          ORM. Styling is done using{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="link"
          >
            TailwindCSS
          </Link>{" "}
          and{" "}
          <Link href="https://ui.shadcn.com/" target="_blank" className="link">
            shadcn/ui
          </Link>
          .
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
            We are currently available for contract work. Please visit the{" "}
            <Link href="/contracting" className="link">
              contracting page
            </Link>{" "}
            to learn more about what we can do for you.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-24">
        <h1>How it works</h1>
        <div className="flex justify-around gap-8 mt-6">
          <div>
            <h2 className="tracking-widest text-gray-500 font-semibold">
              1. Design
            </h2>
            <p className="mt-3 text-lg">
              We will work with you to scope out the project to your exact
              needs. From there, we will provide you with a quote and timeline
              for the project.
            </p>
          </div>
          <div>
            <h2 className="tracking-widest text-gray-500 font-semibold">
              2. Develop
            </h2>
            <p className="mt-3 text-lg">
              Once scoped out and agreed upon, we will begin development. We
              will provide you with weekly updates on the progress of the
              project.
            </p>
          </div>
          <div>
            <h2 className="tracking-widest text-gray-500 font-semibold">
              3. Deliver
            </h2>
            <p className="mt-3 text-lg">
              Once the project is completed we transition everything over to
              your own accounts and provide you with options to continue working
              with us or take over the project yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Featured showcase */}
      <section className="mt-24 mb-12">
        <h2 className="tracking-widest text-gray-500 font-semibold">
          FEATURED
        </h2>
        <Link href="/showcase/streamline">
          <div className="relative mt-3 border w-full overflow-hidden rounded-xl h-full flex flex-col justify-end pt-2 min-h-[350px] shadow-sm hover:shadow-md transition">
            <Image
              height="350"
              width="890"
              alt="Streamline Scientific Logo"
              src="/images/streamline_overview.png"
              className="absolute top-4 left-1/4 rounded-xl border object-none object-left-top shadow-xl"
              style={{
                maxWidth: "890px",
                minWidth: "890px",
                minHeight: "350px",
              }}
            />
            <div className="absolute inset-0 rounded-xl flex flex-col justify-end">
              <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
              <div className="bg-white p-6 flex items-center gap-4">
                <div className="flex items-center">
                  <Image
                    height="0"
                    width="190"
                    alt="Streamline Scientific Logo"
                    src="/images/streamline_logo.png"
                  />
                </div>
                <div className="border-r border-gray-300 h-10 my-auto" />
                <h1 className="text-2xl font-semibold text-gray-800">
                  Streamline Scientific: Increasing sales using custom software
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
