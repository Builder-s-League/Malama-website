'use client'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-brand text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Intro */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-2xl font-bold">Health Advocate</h2>
                    <p className="text-sm text-white/80">
                        We support people through extraordinary medical challenges with compassion, clarity, and care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Navigation</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/form" className="hover:underline">Apply</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Contact</h3>
                    <ul className="space-y-2 text-sm text-white/90">
                        <li>Email: <a href="mailto:info@healthadvocate.ca" className="hover:underline">info@healthadvocate.ca</a></li>
                        <li>Phone: <a href="tel:+11234567890" className="hover:underline">+1 (123) 456-7890</a></li>
                        <li>Location: Winnipeg, Canada</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/20 mt-8">
                <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-white/70">
                    © {new Date().getFullYear()} Health Advocate. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
