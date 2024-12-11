import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "http://www.instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Whatsapp",
    href: "#",
    icon: FaWhatsapp,
  },
  {
    name: "Gmail",
    href: "mailto:https://wa.me/0708296255",
    icon: MdOutlineEmail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-deepBlue" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-brightYellow hover:text-vibrantOrange transition-colors duration-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-lightBlue">
            &copy; 2024 Taxi, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
