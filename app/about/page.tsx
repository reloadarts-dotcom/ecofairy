import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-sand-500 mb-8">
                About Us
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Excellence in
                <br />
                <span className="italic">Every Clean</span>
              </h1>
              <p className="text-lg text-sand-600 leading-relaxed">
                Bringing professional eco-friendly cleaning to the heart of Marbella since day one.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2940"
                alt="Professional cleaning service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="h-px w-16 bg-sand-300 mb-8"></div>
              <h2 className="text-4xl font-serif font-light text-sand-900 mb-8">Who We Are</h2>
              <p className="text-lg text-sand-600 leading-relaxed mb-6">
                EcoFairy is a professional cleaning service located in the heart of Marbella, Spain.
                We specialize in providing high-quality cleaning services for both residential and
                commercial spaces.
              </p>
              <p className="text-lg text-sand-600 leading-relaxed">
                Our dedication to excellence and attention to detail sets us apart in the Costa del
                Sol region, where we proudly serve the vibrant community with professionalism and care.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team.png"
                alt="EcoFairy team"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2940"
                alt="Professional cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-px w-16 bg-sand-300 mb-8"></div>
              <h2 className="text-4xl font-serif font-light text-sand-900 mb-8">Our Mission</h2>
              <p className="text-lg text-sand-600 leading-relaxed mb-6">
                We are committed to exceeding customer expectations through professionalism,
                reliability, and a deep passion for creating immaculate spaces.
              </p>
              <p className="text-lg text-sand-600 leading-relaxed">
                Our fully trained and insured cleaning professionals use eco-friendly products and
                the latest cleaning techniques to ensure your space is not only pristine but also safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Our Values</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-sand-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Eco-Friendly</h3>
              <p className="text-sand-600 leading-relaxed">
                We use environmentally safe products that protect your health and our planet.
                Sustainability is at the core of everything we do.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Professional</h3>
              <p className="text-sand-600 leading-relaxed">
                Our team is fully trained, insured, and dedicated to delivering excellence in
                every service we provide.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Quality Focused</h3>
              <p className="text-sand-600 leading-relaxed">
                We take pride in our attention to detail and commitment to pristine results
                that exceed expectations.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Customer First</h3>
              <p className="text-sand-600 leading-relaxed">
                Your satisfaction is our priority. We're here to serve the Costa del Sol
                community with dedication and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-sand-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-sand-50 mb-8">
            Experience the Difference
          </h2>
          <p className="text-lg text-sand-300 mb-12 max-w-2xl mx-auto">
            Book your cleaning service today and discover why Marbella trusts EcoFairy
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/#booking"
              className="text-sm uppercase tracking-wider text-sand-900 bg-sand-50 px-10 py-4 hover:bg-sand-100 transition-all"
            >
              Book Now
            </a>
            <a
              href="tel:+34607079332"
              className="text-sm uppercase tracking-wider text-sand-50 border border-sand-50 px-10 py-4 hover:bg-sand-800 transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
