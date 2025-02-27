import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer"; // Import the Footer component

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb4 text-4xl font-bold uppercase text-black sm:text-5xl md:mb-8 md:text-6xl">
              Top Fashion for a Top Price
            </h1>
            <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              We sell the best fashion for the best price in the world and we
              are proud of it. So come and check it out. We are waiting for you.
            </p>
          </div>
          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <Image
                width={500}
                height={500}
                priority
                src="/placeholder1.jpg"
                className="h-full w-full object-cover object-center"
                alt="Fashion Image 1"
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                src="/placeholder2.jpg"
                width={500}
                height={500}
                priority
                alt="Fashion Image 2"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <Link
              href="/Men"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100"
            >
              Men
            </Link>
            <Link
              href="/Women"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100"
            >
              Women
            </Link>
            <Link
              href="/Kids"
              className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100"
            >
              Kids
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Hero;