import Image from "next/image";
import { ShowcaseCard } from "../components/ShowcaseCard";
import Link from "next/link";

export default function Page() {
  return (
    <main className="center mt-28">
      <h1 className="text-center">Showcase</h1>
      <p className="text-lg text-center mt-1">See what we've been up to.</p>

      <div className="my-8">
        <section className="center md:h-[500px] w-full p-3">
          <div className="flex flex-col md:flex-row gap-4 h-full w-full">
            <div className="flex flex-col gap-4 h-full w-full">
              <div className="h-full">
                <ShowcaseCard>
                  <Link href="/showcase/fido">
                    <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[300px]">
                      <Image
                        height="38"
                        width="110"
                        alt="Fido Logo"
                        src="/images/fido_logo.png"
                        className="absolute left-6 top-6"
                      />
                      <Image
                        height="42"
                        width="210"
                        alt="Socratico overview"
                        src="/images/fido_overview.png"
                        className="absolute right-6 top-24 rounded-3xl border-2"
                        style={{
                          maxWidth: "210px",
                          minWidth: "210px",
                          minHeight: "42px",
                        }}
                      />
                      <div className="absolute inset-0 rounded-lg flex flex-col justify-end">
                        <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
                        <div className="bg-white p-6 flex flex-col gap-2">
                          <h1 className="text-2xl font-semibold text-gray-800">
                            A mobile app marketplace for security guards and
                            venues
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ShowcaseCard>
              </div>
            </div>
            {/* <div className="h-full w-full">
              <div className="h-full">
                <ShowcaseCard>
                  <Link href="/showcase/streamline">
                    <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[300px]">
                      <Image
                        height="40"
                        width="180"
                        alt="Streamline Scientific Logo"
                        src="/images/streamline_logo.png"
                        className="absolute left-6 top-6"
                      />
                      <Image
                        height="350"
                        width="620"
                        alt="Streamline Scientific Logo"
                        src="/images/streamline_overview.png"
                        className="absolute top-24 left-20 rounded-lg border object-none object-left-top shadow-xl"
                        style={{
                          maxWidth: "620px",
                          minWidth: "620px",
                          minHeight: "350px",
                        }}
                      />
                      <div className="absolute inset-0 rounded-lg flex flex-col justify-end">
                        <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
                        <div className="bg-white p-6 flex flex-col gap-2">
                          <h1 className="text-2xl font-semibold text-gray-800">
                            Streamline Scientific: Increasing sales using custom
                            software
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ShowcaseCard>
              </div>
            </div> */}
            <div className="flex flex-col gap-4 h-full w-full">
              <div className="h-full">
                <ShowcaseCard>
                  <Link href="/showcase/socratico">
                    <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[300px]">
                      <Image
                        height="38"
                        width="190"
                        alt="Fido Logo"
                        src="/images/socratico_logo.png"
                        className="absolute left-6 top-6"
                      />
                      <Image
                        height="100"
                        width="720"
                        alt="Socratico overview"
                        src="/images/socratico_overview.png"
                        className="absolute left-12 top-24 rounded-lg"
                        style={{
                          maxWidth: "720px",
                          minWidth: "720px",
                          minHeight: "350px",
                        }}
                      />
                      <div className="absolute inset-0 rounded-lg flex flex-col justify-end">
                        <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
                        <div className="bg-white p-6 flex flex-col gap-2">
                          <h1 className="text-2xl font-semibold text-gray-800">
                            An innovative team on the mission to make digital
                            tutoring a reality
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ShowcaseCard>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
