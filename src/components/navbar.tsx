'use client'

import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold text-brand">
                    Health Advocate
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-brand transition border-b-2 border-transparent hover:border-brand"
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="text-gray-700 hover:text-brand transition border-b-2 border-transparent hover:border-brand"
                    >
                        Services
                    </Link>
                    <Link
                        href="/form"
                        className="text-gray-700 hover:text-brand transition border-b-2 border-transparent hover:border-brand"
                    >
                        Apply
                    </Link>
                </nav>

                <Link
                    href="/form"
                    className="bg-brand text-white font-medium p-3 rounded-full hover:bg-brand-dark transition"
                >
                    Book Now
                </Link>
            </div>
        </header>
    )
}
