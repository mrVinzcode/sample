import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Welcome to our world of Korean culinary delights! We are Melvin
            Mangubat and Johoney Bernardino, two passionate food enthusiasts who
            embarked on a journey to bring the vibrant flavors of Korea to your
            fingertips through our innovative Korean food app.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>Chefs</li>
            <li>?</li>
            <li>?</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/login">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
