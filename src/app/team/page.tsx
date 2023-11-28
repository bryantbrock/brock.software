import Image from "next/image";
import Link from "next/link";
import XLink from "../components/social/XLink";
import GithubLink from "../components/social/GithubLink";
import LinkedInLink from "../components/social/LinkedInLink";

export default function Page() {
  return (
    <main className="center mt-28">
      {/* Info */}
      <section>
        <h1>Team</h1>
        <div className="border-b mt-2" />
        <div className="mt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <Image
                height="250"
                width="250"
                alt="Bryant's Headshot image"
                className="rounded-lg max-w-[250px]"
                src="https://media.licdn.com/dms/image/D5603AQFhGMQLwYjqBA/profile-displayphoto-shrink_400_400/0/1655949848537?e=1706140800&v=beta&t=AGdKbHfudYCg4dAe9tk8z57Qbv0bh-1sbeLKUxDaGuc"
              />
            </div>
            <div className="flex flex-col">
              <h1>Bryant Brock</h1>
              <p className="text-gray-500 mt-1">Founder & CEO</p>
              <p className="mt-4 text-lg flex-grow">
                Bryant is a full-stack developer with 5+ years of experience
                building web and mobile applications. He has worked with
                companies of all sizes and types, from startups to companies
                with thousands of employees. He loves bringing visions to life
                and does whatever he can to make a dream happen.
              </p>
              <div className="gap-3 opacity-40 mt-4 items-centera flex">
                <XLink height="22" />
                <GithubLink height="26" />
                <LinkedInLink height="26" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
