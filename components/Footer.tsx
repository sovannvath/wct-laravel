import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Logo and Description */}
          <div className="mb-6 flex flex-col items-center md:mb-0 md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo.png"
                width={120}
                height={40}
                alt="Fashion Logo"
              />
            </Link>
            <p className="max-w-xs text-center text-gray-500 md:text-left">
              We sell the best fashion for the best price in the world. Come and
              check it out!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 transition duration-100 hover:text-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 transition duration-100 hover:text-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 transition duration-100 hover:text-gray-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 transition duration-100 hover:text-gray-700"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-lg font-semibold text-black">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-500 transition duration-100 hover:text-gray-700"
              >
                <Image
                  src="/icons/facebook.svg"
                  width={24}
                  height={24}
                  alt="Facebook"
                />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-500 transition duration-100 hover:text-gray-700"
              >
                <Image
                  src="/icons/twitter.svg"
                  width={24}
                  height={24}
                  alt="Twitter"
                />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-500 transition duration-100 hover:text-gray-700"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fashion Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;