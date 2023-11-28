import Link from "next/link";
import { ShowcaseCard } from "./components/ShowcaseCard";
import Image from "next/image";
import ArrowUpRightIcon from "@/icons/ArrowUpRightIcon";
import TailwindCSSSvg from "./components/technologies/TailwindCSSSvg";
import PrismaSvg from "./components/technologies/PrismaSvg";
import NextJsSVG from "./components/technologies/NextJsSvg";
import ReactNativeSvg from "./components/technologies/ReactNativeSvg";
import ClerkSvg from "./components/technologies/ClerkSvg";

export default function Page() {
  return (
    <main>
      {/* Hero message & call to action */}
      <section className="center grid mt-40">
        <div className="bg-gradient-to-br from-gray-500 to-black inline-block text-transparent bg-clip-text">
          <h1 className="text-[62px] text-center font-bold max-w-[710px] mx-auto leading-tight">
            Design, Develop, Deploy.
          </h1>
        </div>
        <h4 className="text-center mx-auto mt-4 max-w-[650px] text-2xl font-normal">
          Custom software solutions for your business: streamline operations,
          reduce expenses, and drive sales growth.
        </h4>
        <Link
          href="/contact"
          className="flex gap-1 items-center bg-gradient-to-tr from-gray-700 to-black hover:opacity-90 transition-opacity text-white rounded-lg shadow-xl w-fit px-5 py-3 mx-auto my-12"
        >
          <span className="text-xl">Contact us</span>
          <ArrowUpRightIcon />
        </Link>
      </section>

      {/* Showcase cards */}
      <section className="center md:h-[600px] w-full p-3">
        <div className="flex flex-col md:flex-row gap-4 h-full w-full">
          <div className="flex flex-col gap-4 h-full w-full">
            <div className="h-3/5">
              <ShowcaseCard>
                <Link href="/showcase/fido">
                  <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[300px]">
                    <Image
                      height="42"
                      width="210"
                      alt="Socratico overview"
                      src="/images/fido_overview.png"
                      className="absolute right-6 top-3 rounded-3xl border-2"
                      style={{
                        maxWidth: "210px",
                        minWidth: "210px",
                        minHeight: "42px",
                      }}
                    />
                    <div className="absolute inset-0 rounded-lg flex flex-col justify-end">
                      <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
                      <div className="bg-white p-6 flex flex-col gap-2">
                        <Image
                          height="38"
                          width="110"
                          alt="Fido Logo"
                          src="/images/fido_logo.png"
                        />
                        <h4 className="text-xl">
                          A mobile app marketplace for security guards and
                          venues
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </ShowcaseCard>
            </div>
            <div className="h-2/5 mt-auto">
              <ShowcaseCard>
                <Link href="/team">
                  <div className="bg-gradient-to-br from-white to-gray-200 rounded-lg flex flex-col justify-end h-full">
                    <h1 className="pt-6 px-5 font-bold text-3xl flex items-center">
                      Team{" "}
                      <span className="ml-1">
                        <ArrowUpRightIcon className="h-6 w-6" />
                      </span>
                    </h1>
                    <h4 className="text-xl pt-2 px-6 pb-6">
                      Get to know our team and how we can help.
                    </h4>
                  </div>
                </Link>
              </ShowcaseCard>
            </div>
          </div>
          <div className="h-full w-full">
            <div className="h-full">
              <ShowcaseCard>
                <Link href="/showcase/streamline">
                  <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[500px]">
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
                          Streamline Scientific:
                          <br />
                          Increasing sales using
                          <br />
                          custom software
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </ShowcaseCard>
            </div>
          </div>
          <div className="flex flex-col gap-4 h-full w-full">
            <div className="h-2/5">
              <ShowcaseCard>
                <Link href="/web-apps">
                  <div className="bg-gradient-to-br from-white to-gray-200 rounded-lg flex flex-col justify-end h-full">
                    <h1 className="pt-6 px-5 font-bold text-3xl flex items-center">
                      Web apps{" "}
                      <span className="ml-1">
                        <ArrowUpRightIcon className="h-6 w-6" />
                      </span>
                    </h1>
                    <h4 className="text-xl pt-2 px-6 pb-6">
                      Our team has 5+ years of experience building web apps for
                      companies of all sizes. See how it works.
                    </h4>
                  </div>
                </Link>
              </ShowcaseCard>
            </div>
            <div className="h-3/5">
              <ShowcaseCard>
                <Link href="/showcase/socratico">
                  <div className="relative overflow-hidden rounded-lg h-full flex flex-col justify-end pt-2 min-h-[300px]">
                    <Image
                      height="100"
                      width="720"
                      alt="Socratico overview"
                      src="/images/socratico_overview.png"
                      className="absolute left-12 top-3 rounded-lg"
                      style={{
                        maxWidth: "720px",
                        minWidth: "720px",
                        minHeight: "350px",
                      }}
                    />
                    <div className="absolute inset-0 rounded-lg flex flex-col justify-end">
                      <div className="bg-gradient-to-b from-transparent to-white flex-grow" />
                      <div className="bg-white p-6 flex flex-col gap-2">
                        <Image
                          height="38"
                          width="190"
                          alt="Fido Logo"
                          src="/images/socratico_logo.png"
                        />
                        <h4 className="text-xl">
                          An innovative team on the mission to make digital
                          tutoring a reality
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </ShowcaseCard>
            </div>
          </div>
        </div>
      </section>

      {/* Scores */}
      <section className="bg-gray-50 border-y my-28 p-6">
        <div className="center flex justify-between md:justify-around">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl md:text-[48px]">5+</h1>
            <p className="text-center text-lg leading-relaxed">
              Years of <br />
              expertise
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl md:text-[48px]">223,000</h1>
            <p className="text-center text-lg leading-relaxed">
              lines of code <br /> contributed
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl md:text-[48px]">$1.5M</h1>
            <p className="text-center text-lg leading-relaxed">
              handled through <br /> software we built
            </p>
          </div>
        </div>
      </section>

      {/* Frequently used emblems */}
      <section className="center pb-8 my-6 p-3">
        <h4 className="tracking-widest text-gray-500 text-sm text-center">
          FREQUENTLY USED
        </h4>
        <div className="flex justify-between gap-10 my-8 flex-wrap">
          <NextJsSVG />
          <TailwindCSSSvg />
          <PrismaSvg />
          <ReactNativeSvg />
          <ClerkSvg />
        </div>
      </section>

      {/* Testimonials */}
      <section className="center w-full py-6 md:py-12 px-2">
        <div className="flex flex-col md:flex-row rounded-md">
          <div className="flex flex-col p-6 border-2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none w-full">
            <p className="text-lg text-gray-600 flex-grow mb-8">
              "Brock Software is a game-changer! They crafted a flawless
              e-commerce platform for my business. Their team is super
              responsive, and the results are mind-blowing. Top-notch software
              development!""
            </p>
            <Image
              height="38"
              width="90"
              alt="Fido Logo"
              src="/images/fido_logo.png"
              className="mb-1"
            />
            <p>Jeremiah Mosley, Founder</p>
          </div>
          <div className="flex flex-col p-6 border-2 border-t-0 md:border-l-0 md:border-t-2 w-full">
            <p className="text-lg text-gray-600 flex-grow mb-8">
              "Brock Software nailed it with my mobile app. Impressive quality
              and post-launch support. Worth the investment for reliable
              software development. "
            </p>
            <Image
              height="38"
              width="130"
              alt="Fido Logo"
              src="/images/streamline_logo.png"
              className="mb-1"
            />
            <p>Marty Sampson, Director of Web Technologies</p>
          </div>
          <div className="flex flex-col p-6 border-2 rounded-b-lg md:rounded-r-lg md:rounded-b-none border-t-0 md:border-l-0 md:border-t-2 w-full">
            <p className="text-lg text-gray-600 flex-grow mb-8">
              "Brock Software delivered a spot-on solution for my startup. Quick
              to adapt, great communication, and expert developers. Perfect for
              bringing ideas to life!"
            </p>
            <Image
              height="38"
              width="150"
              alt="Fido Logo"
              src="/images/socratico_logo.png"
              className="mb-1"
            />
            <p>Cody Kingham, Co-founder & CEO</p>
          </div>
        </div>
      </section>

      <section className="center flex gap-6 items-center justify-center">
        <p>Want to learn more?</p>
        <Link
          href="/contact"
          className="flex gap-1 items-center bg-gradient-to-tr from-gray-700 to-black hover:opacity-90 transition-opacity text-white rounded-lg shadow-lg w-fit px-4 py-2 my-6"
        >
          <span className="text-xl">Contact us</span>
          <ArrowUpRightIcon />
        </Link>
      </section>
    </main>
  );
}
