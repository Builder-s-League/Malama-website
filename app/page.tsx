import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Footer from "@/components/Footer";
import OurValues from "@/components/OurValues";

export default function Page() {
  return (
      <div className="min-h-screen">
        <Navbar/>

        {/* Hero Section */}
        <section
            className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] dark:from-[#191718] dark:to-[#302324]">
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#23a6f0] text-white">Professional Healthcare</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#191718] dark:text-white leading-tight">
                  Extraordinary health situation? <span className="text-[#4b7b9a]">I can help!</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  I help those in extraordinary medical situations where common solutions are not enough. Professional
                  nursing care with over 30 years of experience.
                </p>
                <Button size="lg" className="bg-[#23a6f0] hover:bg-[#4b7b9a] text-white">
                  Contact Me
                </Button>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-[#4b7b9a]">
                  <Image
                      src="/images/hero-image.jpg"
                      alt="Professional nurse Michelle"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#191718] dark:text-white">About Us</h2>
                <p className="text-muted-foreground mb-6">
                  Michelle is a professional nurse with 30+ years of experience. We help those in extraordinary medical
                  situations where common solutions are not enough.
                </p>
                <p className="text-muted-foreground mb-8">
                  Hundreds of clients across Canada have received personalized solutions and compassionate care.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4b7b9a]">30+</div>
                    <div className="text-sm text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4b7b9a]">1000+</div>
                    <div className="text-sm text-muted-foreground">People Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4b7b9a]">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>

                <Button className="bg-[#633b48] hover:bg-[#4b7b9a] text-white">Schedule a Call</Button>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-lg overflow-hidden">
                  <Image
                      src="/images/hero-image.jpg"
                      alt="About Michelle"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <OurValues/>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-muted px-8 py-3 rounded-full mb-6">
                <h2 className="text-2xl font-bold text-[#191718] dark:text-white">OUR MISSION</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg">
                  Michelle with her 40 years of experience is here for providing support that your loved ones needs to
                  stay healthy and monitored.
                </p>
                <p className="text-lg">Meet the Manitoba wide consultants.</p>
                <p className="text-lg">Based in Heart of Canada Winnipeg Manitoba.</p>
                <p className="text-lg">Get supportive needs in your area.</p>
                <p className="text-lg">No more waiting or commuting long distance on a cold Canada Day.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#4b7b9a]">Meet Michelle</h3>
                <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden">
                  <Image
                      src="/images/hero-image.jpg"
                      alt="Meet Michelle"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section
            id="testimonials"
            className="py-16 relative bg-cover bg-center"
            style={{ backgroundImage: "url('/images/consultation-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto text-center">
              <div className="bg-white/90 dark:bg-black/90 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">
                  I'm ready to <span className="underline decoration-[#4b7b9a]">listen</span>.
                </h2>
                <Button size="lg" className="mt-6 bg-[#4b7b9a] hover:bg-[#23a6f0] text-white">
                  Book a consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg italic">
                        "I would like to take a few moments to express my deep gratitude to Nurse Michelle. She was like
                        an angel during a very critical time when we desperately needed help caring for our first child,
                        who was suffering from a rare illness."
                      </p>
                      <p className="text-lg italic">
                        "Michelle cared for our baby every single day for 8 hours, without ever showing signs of fatigue
                        or neglect."
                      </p>
                      <p className="text-lg italic">
                        "I honestly can't imagine how I would've made it through that difficult period without her support
                        and care."
                      </p>
                      <p className="text-lg italic">"All my heartfelt thanks and appreciation to Michelle."</p>
                      <p className="font-semibold text-[#4b7b9a]">- Basher, Hassna, and Tarek Alker</p>
                    </div>
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                        <Image
                            src="/placeholder.svg?height=192&width=192"
                            alt="Happy family testimonial"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
  )
}
