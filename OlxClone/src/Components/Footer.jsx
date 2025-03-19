import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-gray-700">
        {/* Popular Locations */}
        <div>
          <h3 className="font-bold mb-2">POPULAR LOCATIONS</h3>
          <ul className="space-y-1">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div>
          <h3 className="font-bold mb-2">TRENDING LOCATIONS</h3>
          <ul className="space-y-1">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <ul>
            <li>Tech@OLX</li>
          </ul>
        </div>

        {/* OLX Links */}
        <div>
          <h3 className="font-bold mb-2">OLX</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>

        {/* Social Media & App Links */}
        <div>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <div className="flex space-x-3 mb-3">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaPlay className="text-xl cursor-pointer" />
          </div>
          {/* App Store Links */}
          <div className="space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

