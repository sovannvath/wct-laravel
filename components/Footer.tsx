import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-gray-400 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-gray-400 transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-gray-400 transition-colors">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">
              Get the latest updates on new products and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Brand Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;