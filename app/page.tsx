'use client';

import OurValues from "../components/OurValues";
import AnimatedElement from '../components/animated-element'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-white">
      <AnimatedElement>
        <section className="bg-[#f5f7fa] px-6 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000"
                  alt="Michelle - Nurse"
                  className="w-full h-full object-cover object-center [clip-path:url(#blobClipPath)]"
                />
              </div>
              <svg width="0" height="0">
                <defs>
                  <clipPath id="blobClipPath" clipPathUnits="objectBoundingBox">
                    <path d="M0.78,0.13 C0.9,0.3,1,0.5,0.91,0.66 C0.82,0.82,0.57,0.96,0.35,0.94 C0.13,0.92,-0.08,0.74,0.01,0.52 C0.1,0.3,0.66,-0.05,0.78,0.13 Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                <span className="block">Extraordinary health situation?</span>
                <span className="block text-brand">I can help!</span>
              </h2>
              <p className="text-gray-700">
                When life throws medical challenges your way, we step in with personalized support, compassion, and care. You're not alone — we’re here to help you take the next step.
              </p>
              <Link
                href="/form"
                className="inline-block bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-6 py-3 rounded-md transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </AnimatedElement>
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
            <p className="text-gray-700 leading-relaxed">
              Michelle is a professional nurse with 30+ years of hands-on experience. She has helped hundreds of clients navigate the healthcare system and find real solutions to complex issues.
            </p>
            <p className="text-gray-700">
              We specialize in supporting people when they feel lost, overwhelmed, or forgotten by the system. With compassion and deep medical knowledge, we bring direction and peace of mind.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-500">People Helped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Special Medical Cases</p>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-block mt-8 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000"
              alt="Michelle - Nurse"
              className="w-full max-w-md rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <OurValues/>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How We Help
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Every person’s situation is unique. Here’s how we support people facing complex medical needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-brand mb-2">1. Personal Consultation</h3>
              <p className="text-sm text-gray-600">
                We meet you where you are — physically, emotionally, and medically — to understand your situation and needs.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-brand mb-2">2. Medical Advocacy</h3>
              <p className="text-sm text-gray-600">
                We help communicate with healthcare providers and specialists, ensuring your voice is heard and your rights respected.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-brand mb-2">3. Tailored Support Plan</h3>
              <p className="text-sm text-gray-600">
                We build a customized plan to guide you step by step toward stability, health, and hope.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
