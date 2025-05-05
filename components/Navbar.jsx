"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm bg-black z-10">
      <div className="px-4 sm:px-6 md:px-12 h-16 sm:h-20 md:h-24 flex justify-between items-center text-white relative">
        {/* Logo */}
        <a href="#" className="md:inline hidden">
          Shaun
        </a>
        <a href="#" className="md:hidden">
          S
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-end space-x-4">
          <a href="#aboutMe" className="p-4 hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#projects" className="p-4 hover:text-gray-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="p-4 hover:text-gray-300 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full">
          <div className="flex flex-col items-center py-4">
            <a
              href="#aboutMe"
              className="w-full text-center py-4 text-white hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="w-full text-center py-4 text-white hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="w-full text-center py-4 text-white hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
