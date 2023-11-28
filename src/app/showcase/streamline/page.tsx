import { ImageViewer } from "@/app/components/ImageViewer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className=" mt-28">
        <section className="center">
          <Image
            height="25"
            width="260"
            alt="Streamline Logo"
            src="/images/streamline_logo.png"
            className="mx-auto w-full max-w-[260px]"
          />
          <div className="rounded-lg gap-8 border-y p-2 flex justify-around mt-16">
            <div>
              <h4 className="font-bold font-sm tracking-wider">Company size</h4>
              <p>Established</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Duration</h4>
              <p>Feb '23 - Present</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">App Type(s)</h4>
              <p>Web app</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Industry</h4>
              <p>Medical</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Status</h4>
              <p>Live</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:border-r p-8 w-full">
              <h2 className="text-center">Problem</h2>
              <p className="mt-4 text-lg">
                Molecular Designs (parent company of Streamline Scientific) had
                been taking all orders manually via phone or email for security
                reasons. This was a slow and tedious process that was prone to
                error. They needed a way to streamline their ordering process
                and make it easier for their customers to securely place orders.
              </p>
            </div>
            <div className="p-8 w-full">
              <h2 className="text-center">Solution</h2>
              <p className="mt-4 text-lg">
                Streamline Scientific is a web app that allows clients and
                distributors to place orders for their products. The app
                required significant backend and frontend work to handle the
                complicated shipping, ordering, and permission logic. The app
                was built using Next.js, Fly.io, Prisma, and AWS.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gray-900 mt-4 px-3 py-8">
          <section className="center flex flex-col gap-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/streamline_5.png"
                  className="shadow rounded-lg w-full md:w-1/3 object-cover object-center"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  height="100"
                  width="400"
                  alt="thumbnail 1"
                  src="/images/streamline_6.png"
                  className="shadow rounded-lg w-full md:w-2/3"
                />
              </ImageViewer>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <ImageViewer>
                <img
                  height="100"
                  width="400"
                  alt="thumbnail 1"
                  src="/images/streamline_3.png"
                  className="shadow rounded-lg w-full md:w-2/3 object-cover"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  height="100"
                  width="400"
                  alt="thumbnail 1"
                  src="/images/streamline_4.png"
                  className="shadow rounded-lg w-full md:w-1/3 object-cover object-right"
                />
              </ImageViewer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
