import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Link from "next/link";
import NavigationMenu from "./components/NavigationMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Bars3Icon from "@/icons/Bars3Icon";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { SubscriptionForm } from "./components/SubscriptionForm";
import GithubLink from "./components/social/GithubLink";
import LinkedInLink from "./components/social/LinkedInLink";
import XLink from "./components/social/XLink";
import { Analytics } from "@vercel/analytics/react";

const styled = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-styled",
  display: "swap",
});

const normal = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brock Software",
  description: "Ship custom web apps at lightspeed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${normal.className} ${styled.variable}`}>
        {/* Navigation bar */}
        <div className="fixed top-0 left-0 right-0 border-b bg-white z-40">
          <nav className="p-3 w-full flex items-center justify-between mx-auto max-w-[1200px] bg-white">
            <div className="flex gap-2 md:gap-4 items-center">
              <Link href="/" className="flex gap-2 items-center">
                <Image
                  src="/images/black_emblem.png"
                  alt="color logo no bg"
                  width="30"
                  height="30"
                />
                <h1 className="font-bold text-lg md:text-2xl">
                  Brock Software
                </h1>
              </Link>
              <div className="border-r border-gray-300 h-5 my-auto" />
              <div className="hidden md:block">
                <NavigationMenu />
              </div>
              <div className="flex md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Bars3Icon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="text-lg">
                        Products
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Link href="/web-apps" className="text-lg">
                              Web apps
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/consulting" className="text-lg">
                              Consulting
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/contracting" className="text-lg">
                              Contracting
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="text-lg">
                        Company
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Link href="/contact" className="text-lg">
                              Contact
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/team" className="text-lg">
                              Team
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/blog" className="text-lg">
                              Blog
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/careers" className="text-lg">
                              Careers
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Link href="/showcase" className="text-lg">
                        Showcase
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="flex gap-1 items-center bg-black hover:opacity-80 transition-opacity text-white rounded-lg w-fit px-4 py-1.5"
              >
                <span className="text-sm md:text-base">Contact us</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Content */}
        <div className="min-h-[calc(100vh-550px)] mb-20">{children}</div>

        <Analytics />

        {/* Footer */}
        <footer className="center mt-20 p-3 my-3">
          <div className="h-[300px] flex flex-wrap md:flex-nowrap gap-8 justify-between">
            <div className="flex flex-col justify-between w-full md:w-max">
              <Link href="/" className="flex gap-2 items-center">
                <Image
                  src="/images/black_emblem.png"
                  alt="color logo no bg"
                  width="25"
                  height="25"
                />
                <h1 className="font-bold text-xl">Brock Software</h1>
              </Link>
              <div>
                <p className="text-gray-500 mt-4">
                  © {new Date().getFullYear()} Brock Software LLC
                </p>
                {/* <div className="gap-2 opacity-60 mt-4 items-centera hidden md:flex">
                  <XLink height="24" />
                  <div className="border-r border-gray-300 h-5 my-auto" />
                  <GithubLink height="28" />
                  <div className="border-r border-gray-300 h-5 my-auto" />
                  <LinkedInLink height="28" />
                </div> */}
              </div>
            </div>
            <div>
              <p className="font-semibold pb-6 text-gray-800">Products</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/web-apps" className="hover:underline">
                    Web apps
                  </Link>
                </li>
                <li>
                  <Link href="/consulting" className="hover:underline">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/contracting" className="hover:underline">
                    Contracting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold pb-6 text-gray-800">Showcase</p>
              <ul className="flex flex-col gap-3">
                {/* <li>
                  <Link href="/showcase/streamline" className="hover:underline">
                    Streamline Scientific
                  </Link>
                </li> */}
                <li>
                  <Link href="/showcase/socratico" className="hover:underline">
                    Socratico.ai
                  </Link>
                </li>
                <li>
                  <Link href="/showcase/fido" className="hover:underline">
                    Fido
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold pb-6 text-gray-800">Company</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[270px] pb-8">
              <p className="font-semibold pb-6 text-gray-800">
                Subscribe to our newsletter
              </p>
              <p className="text-gray-600">
                Stay updated on insights into the world of software development.
              </p>
              <SubscriptionForm />
            </div>
          </div>
        </footer>

        {/* Fixed social links in bottom right corner  */}
        <nav className="fixed flex flex-col items-center gap-3 bottom-5 right-5">
          <XLink />
          <GithubLink />
          <LinkedInLink />
        </nav>
      </body>
    </html>
  );
}
