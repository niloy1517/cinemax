import React from 'react'
import { Facebook, Linkedin, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#06010f] text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <p className="text-[#E50914] text-3xl font-bold mb-3">CineMax</p>
          <p className="text-sm leading-relaxed mb-4">
            Book movie tickets easily. Anytime. Anywhere.
          </p>

          <div className="flex gap-4">
            <Link to="#" className="hover:text-[#E50914] transition">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="hover:text-[#E50914] transition">
              <Linkedin size={20} />
            </Link>
            <Link to="#" className="hover:text-[#E50914] transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-4">Quick Links</p>
          <ul className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-[#E50914]">Home</Link>
            <Link to="/movies" className="hover:text-[#E50914]">Movies</Link>
            <Link to="/theatres" className="hover:text-[#E50914]">Theatres</Link>
            <Link to="/contact" className="hover:text-[#E50914]">Contact</Link>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <p className="text-white font-semibold mb-4">Categories</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-[#E50914] cursor-pointer">Action</li>
            <li className="hover:text-[#E50914] cursor-pointer">Adventure</li>
            <li className="hover:text-[#E50914] cursor-pointer">Thriller</li>
            <li className="hover:text-[#E50914] cursor-pointer">Romance</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-white font-semibold mb-4">Support</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-[#E50914] cursor-pointer">FAQs</li>
            <li className="hover:text-[#E50914] cursor-pointer">Refund Policy</li>
            <li className="hover:text-[#E50914] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#E50914] cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CineMax. All rights reserved. <br />
        Made with ❤️ by <span className="text-white">Niloy Gope</span>
      </div>
    </footer>
  )
}

export default Footer
