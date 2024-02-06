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
            src="/images/socratico_logo.png"
            className="mx-auto w-full max-w-[300px]"
          />
          <div className="rounded-lg gap-8 border-y p-2 flex justify-around mt-16">
            <div>
              <h4 className="font-bold font-sm tracking-wider">Company size</h4>
              <p>Startup</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Duration</h4>
              <p>Oct '23 - Present</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">App Type(s)</h4>
              <p>Web app</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Industry</h4>
              <p>Education</p>
            </div>
            <div>
              <h4 className="font-bold font-sm tracking-wider">Status</h4>
              <p>Beta testing</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:border-r p-8 w-full">
              <h2 className="text-center">Problem</h2>
              <p className="mt-4 text-lg">
                The current education system is slow, bloated, and solely
                focused on getting a checkmark. Instead, the world needs the
                next generation of leaders who can think for themselves and be
                critical problem solvers, but our current education system is
                far from being able to deliver such an outcome.
              </p>
            </div>
            <div className="p-8 w-full">
              <h2 className="text-center">Solution</h2>
              <p className="mt-4 text-lg">
                Using the power of AI, which excels at working with texts,
                Socratico is on a mission to make 1-on-1 tutoring accessible to
                all students. Combining 1-on-1 tutoring and AI, Socratico
                engages a student through interactive content, helps them
                understand complex problems, and challenges them to go further.
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
                  src="/images/socratico_2.png"
                  className="shadow rounded-lg w-full md:w-1/3 object-cover object-right"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/socratico_1.png"
                  className="shadow rounded-lg w-full md:w-2/3 object-cover"
                />
              </ImageViewer>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/socratico_4.png"
                  className="shadow rounded-lg w-full md:w-2/3 object-cover"
                />
              </ImageViewer>
              <ImageViewer>
                <img
                  alt="thumbnail 1"
                  src="/images/socratico_3.png"
                  className="shadow rounded-lg w-full md:w-1/3 object-cover object-center"
                />
              </ImageViewer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
