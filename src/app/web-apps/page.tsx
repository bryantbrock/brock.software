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
          ORM. Styling is done u
        </p>
      </section>

      {/* Featured showcase */}
      <section className="mt-12">
        <h2 className="tracking-widest text-gray-500 font-semibold">
          FEATURED
        </h2>
        <Link href="/showcase/streamline-scientific">
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

      <section className="mt-12">
        <h1>How it works</h1>
      </section>
    </main>
  );
}
