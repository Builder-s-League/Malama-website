"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#4b7b9a]">
              Maluma Nursing
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground hover:text-[#4b7b9a] transition-colors">
              About
            </Link>
            <Link href="#services" className="text-foreground hover:text-[#4b7b9a] transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-[#4b7b9a] transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-foreground hover:text-[#4b7b9a] transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button className="bg-[#23a6f0] hover:bg-[#4b7b9a] text-white">Book Consultation</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-[#4b7b9a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-[#4b7b9a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-foreground hover:text-[#4b7b9a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-[#4b7b9a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#23a6f0] hover:bg-[#4b7b9a] text-white">Book Consultation</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
