import Image from "next/image"

export default function OurValues() {
  return (
      <section className="bg-[#ffffff] min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <Image
                    src="/our-values.png"
                    alt="Smiling woman in floral dress outdoors"
                    width={500}
                    height={600}
                    className="rounded-3xl object-cover w-full h-96"
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-[#121212] leading-tight">
                Our Values
              </h1>

              <div className="space-y-2">
                <p className="text-lg text-[#848484] leading-relaxed">
                  Our vision and focus to care.
                </p>
                <p className="text-lg text-[#848484] leading-relaxed">
                  Medical security is important.
                </p>
                <p className="text-lg text-[#848484] leading-relaxed">
                  Empathy derived from lived experience.
                </p>
              </div>

              <p className="text-base text-[#848484] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Faucibus mi eget enim sit ac dignissim non. Amet quis egestas nam
                sem justo. Tellus interdum nibh sagittis facilisi gravida ut. Enim justo feugiat libero odio. Consequat et
                id tortor nunc faucibus vestibulum eget sollicitudin. Nullam dui mauris fermentum fames euismod elm.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
