import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const fetchData = async () => {
  const query = "*[_type=='heroImage'][0]";
  const data = await client.fetch(query);
  return data;
};

const Hero = async () => {
  const data = await fetchData();
  if (!data) {
    return <div>No data!</div>;
  }
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex  flex-wrap justify-between md:mb-16">
        <div className="mb-6 w-full flex flex-col justify-center sm:mb-12 lg:w-1/3 lg:mb-0 lg:pb-24 lg:pt-48 ">
          <h1 className="uppercase mb4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl ">
            Top Fashion for a Top Price
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            we sell the best fashion for the best price in the world and we are
            proud of it. so come and check it out. we are waiting for you.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              width={500}
              priority
              height={500}
              src={urlFor(data.heroImage1).url()}
              className="h-full w-full object-center object-cover"
              alt="heroImage1"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.heroImage2).url()}
              width={500}
              height={500}
              priority
              alt="heroImage2"
              className="h-full w-full object-center object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 overflow-hidden divide-x rounded-lg border">
          <Link
            href={"/men"}
            className="flex items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 w-1/3"
          >
            Men
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
