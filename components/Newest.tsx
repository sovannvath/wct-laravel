import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Newest = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            className="flex items-center gap-x-1 text-primary transition-all duration-300 hover:gap-x-2"
            href="/products"
          >
            See All <ArrowRight size={20} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              {/* Card Image */}
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 transition-all duration-300 group-hover:shadow-lg lg:h-72 xl:h-80">
                <Image
                  src="/placeholder-product.jpg" // Replace with your product image
                  alt="Product Image"
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>

              {/* Card Content */}
              <div className="mt-4 flex flex-wrap items-center justify-between px-1">
                <h3 className="text-sm text-gray-700">
                  <Link href={`/products/sample-slug`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Product Name {index + 1}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-bold text-gray-900">$99.99</p>
              </div>

              {/* Category */}
              <div className="flex justify-between">
                <p className="mt-1 text-sm font-bold text-gray-900">Category</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20">
                <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;