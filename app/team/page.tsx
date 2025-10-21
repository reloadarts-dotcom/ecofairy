import Image from 'next/image'

export default function TeamPage() {
  const team = [
    { name: 'Kadri', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2940' },
    { name: 'Rosa', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961' },
    { name: 'Jonas', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787' },
    { name: 'Alba', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940' },
    { name: 'Katerini', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788' },
    { name: 'Maria', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=2787' },
    { name: 'Nora', role: 'Cleaning Specialist', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2964' }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-sand-500 mb-8">
                Our Team
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Meet the
                <br />
                <span className="italic">Professionals</span>
              </h1>
              <p className="text-lg text-sand-600 leading-relaxed">
                Dedicated experts bringing excellence and care to every cleaning service in Marbella.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940"
                alt="Professional cleaning team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Description */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="h-px w-16 bg-sand-300 mb-8 mx-auto"></div>
          <p className="text-xl text-sand-600 leading-relaxed text-center max-w-3xl mx-auto">
            At EcoFairy, professionalism, reliability, and a deep passion for pristine spaces
            drive us to serve the vibrant Costa del Sol community. Our team is based in Marbella
            and provides cleaning services for residential and commercial spaces, using eco-friendly
            products and techniques.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square mb-6 overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-2xl font-serif font-light text-sand-900 mb-2">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider text-sand-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Our Standards</p>
            <h2 className="text-5xl font-serif font-light text-sand-900">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-8"></div>
              <h3 className="text-2xl font-serif font-light text-sand-900 mb-4">Fully Trained</h3>
              <p className="text-sand-600 leading-relaxed">
                Every team member receives comprehensive training in modern cleaning techniques
              </p>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-8"></div>
              <h3 className="text-2xl font-serif font-light text-sand-900 mb-4">Insured</h3>
              <p className="text-sand-600 leading-relaxed">
                Complete insurance coverage for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-8"></div>
              <h3 className="text-2xl font-serif font-light text-sand-900 mb-4">Eco-Conscious</h3>
              <p className="text-sand-600 leading-relaxed">
                Committed to using environmentally friendly products and practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-sand-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-sand-50 mb-8">
            Work With Our Team
          </h2>
          <p className="text-lg text-sand-300 mb-12">
            Experience professional cleaning from a team that cares
          </p>
          <a
            href="/#booking"
            className="inline-block text-sm uppercase tracking-wider text-sand-900 bg-sand-50 px-10 py-4 hover:bg-sand-100 transition-all"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  )
}
