"use client"

import { motion } from "framer-motion"
import { Brain, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Regulatory Strategy", href: "/regulatory" },
      { name: "Quality Management", href: "/quality" },
      { name: "Gap Analysis", href: "#" },
      { name: "Submission Support", href: "#" },
    ],
  },
 
 
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        {/* Brand Section */}
        <div className="flex flex-col items-center text-center justify-center mx-auto">
        <Link href="/" className="flex items-center space-x-2 mb-6 justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">LucidMind Consulting</span>
        </Link>
        <p className="text-gray-400 mb-6 max-w-md">
          Simplifying medical device regulatory and quality challenges. Innovation meets clarity for faster market
          entry.
        </p>
        <div className="flex space-x-4 justify-center">
          <motion.a
          href="https://in.linkedin.com/in/praveen-gautam-4817411b2"
          target="_blank"
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
          <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
          href={`mailto:info@lucidmindconsulting.com?subject=${encodeURIComponent(
                "Inquiry from LucidMind Website"
              )}&body=${encodeURIComponent(
                "Hi LucidMind Team,\n I'am interested in learning more about your regulatory consulting services. Please contact me with more information. \n Thank you!"
              )}`}
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
          <Mail className="h-5 w-5" />
          </motion.a>
          <motion.a
          href="tel:+1234567890"
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
          <Phone className="h-5 w-5" />
          </motion.a>
        </div>
        </div>

        {/* Links Sections */}
        {/* {footerLinks.map((section, index) => (
        <div key={index} className="flex flex-col items-center text-center mt-8">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
              {link.name}
            </Link>
            </li>
          ))}
          </ul>
        </div>
        ))} */}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col justify-center items-center w-full">
        <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center">
        © {new Date().getFullYear()} LucidMind Consulting. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  )
}

