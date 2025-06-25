import Image from "next/image"

export default function OurValues() {
  return (
      <section className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left order-1 md:order-2">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Our Values
              </h1>

              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed">
                  Our vision and focus to care.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Medical security is important.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Empathy derived from lived experience.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                Lorem ipsum dolor sit amet consectetur. Faucibus mi eget enim sit
                ac dignissim non. Amet quis egestas nam sem justo. Tellus interdum
                nibh sagittis facilisi gravida ut. Enim justo feugiat libero odio.
                Consequat et id tortor nunc faucibus vestibulum eget
                sollicitudin. Nullam dui mauris fermentum fames euismod elm.
              </p>
            </div>

            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative w-full max-w-md">
                <Image
                    src="/our-values.png"
                    alt="Smiling woman in floral dress outdoors"
                    width={500}
                    height={600}
                    className="rounded-3xl object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
