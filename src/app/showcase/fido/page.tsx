import { ImageViewer } from "@/app/components/ImageViewer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className=" mt-28">
        <section className="center">
          <Image
            height="38"
            width="300"
            alt="Fido Logo"
            src="/images/fido_logo.png"
            className="mx-auto w-full max-w-[300px]"
          />
          <div className="rounded-lg gap-8 border-y p-2 flex justify-around mt-16">
            <div>
              <h4 className="font-bold font-sm tracking-wider">Company size</h4>
              <p>Startup</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Duration</h4>
              <p>March '23 - June '23</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">App Type(s)</h4>
              <p>Mobile app (prototype)</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Industry</h4>
              <p>Service marketplace</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Status</h4>
              <p>Completed</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:border-r p-8 w-full">
              <h2 className="text-center">Problem</h2>
              <p className="mt-4 text-lg">
                Hiring security guards is a pain. It's a long, drawn out process
                and you never know who the police department will send your way.
                In addition, building service marketplaces can be expensive,
                easily costing $150,000-$250,000+. Fido needed a way to get off
                the ground.
              </p>
            </div>
            <div className="p-8 w-full">
              <h2 className="text-center">Solution</h2>
              <p className="mt-4 text-lg">
                Using Brock Software, Fido was able to build a prototype mobile
                application for under $10,000. It was used to raise the funding
                necessary to build the full app. The app was built using React
                Native, a Node.js API and hosted with Expo.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gray-900 mt-4 px-3 py-8">
          <section className="center flex flex-col gap-4 mx-auto w-max">
            <div className="flex gap-4 flex-col md:flex-row">
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_9.png"
                  className="shadow rounded-lg w-full object-cover object-right h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_2.png"
                  className="shadow rounded-lg w-full object-cover h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_3.png"
                  className="shadow rounded-lg w-full object-cover h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_4.png"
                  className="shadow rounded-lg w-full object-cover h-[500px]"
                />
              </ImageViewer>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_5.png"
                  className="shadow rounded-lg w-full object-cover object-center h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_6.png"
                  className="shadow rounded-lg w-full object-cover h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_7.png"
                  className="shadow rounded-lg w-full object-cover object-center h-[500px]"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/fido_8.png"
                  className="shadow rounded-lg w-full object-cover object-center h-[500px]"
                />
              </ImageViewer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
