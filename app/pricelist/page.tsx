import Image from 'next/image'

export default function PricelistPage() {
  const services = [
    {
      name: 'Residential Cleaning',
      price: '20€',
      unit: 'per hour',
      description: 'General surface cleaning of kitchen, living room, bedrooms and bathrooms',
      features: [
        'Dusting all surfaces',
        'Vacuuming and mopping floors',
        'Kitchen cleaning',
        'Bathroom sanitization',
        'Making beds'
      ]
    },
    {
      name: 'Deep Cleaning',
      price: '25€',
      unit: 'per hour',
      description: 'Hand-washing cabinets, vacuuming upholstery, polishing wood, and cleaning the oven, ceiling fan blades, baseboards, and more',
      features: [
        'Everything in residential cleaning',
        'Cabinet interior/exterior cleaning',
        'Appliance deep cleaning',
        'Baseboard wiping',
        'Window sill cleaning',
        'Detailed dusting'
      ]
    },
    {
      name: 'Green Cleaning',
      price: '+20€',
      unit: 'additional',
      badge: 'Eco Add-on',
      description: 'Eco-friendly cleaning products that are safe for the environment',
      features: [
        '100% natural products',
        'Non-toxic solutions',
        'Safe for children and pets',
        'Environmentally responsible',
        'Allergen-free options'
      ]
    },
    {
      name: 'Carpet & Sofa Cleaning',
      price: '+50€',
      unit: 'additional',
      badge: 'Specialty',
      description: 'Special wet vacuum cleaner and cleaning products',
      features: [
        'Professional equipment',
        'Deep stain removal',
        'Odor elimination',
        'Fabric protection',
        'Fast drying'
      ]
    },
    {
      name: 'Post Construction',
      price: '30€',
      unit: 'per hour',
      description: 'Vacuuming, dusting, wiping surfaces, cleaning windows, and removing any last bits of debris',
      features: [
        'Debris removal',
        'Dust elimination',
        'Window cleaning',
        'Floor deep cleaning',
        'Final polish',
        'Move-in ready'
      ]
    },
    {
      name: 'Airbnb Cleaning',
      price: '25€',
      unit: 'per hour',
      description: 'Cleaning bathrooms, washing towels and bed sheets, vacuuming carpets, sweeping/mopping floors, wiping down surfaces, and taking out the trash',
      features: [
        'Full bathroom cleaning',
        'Fresh linens',
        'Kitchen sanitization',
        'Trash removal',
        'Quick turnaround',
        'Guest-ready preparation'
      ]
    },
    {
      name: 'Commercial Spaces',
      price: '25€',
      unit: 'per hour',
      description: 'Professional cleaning for offices, retail spaces, and commercial properties',
      features: [
        'Desk and surface cleaning',
        'Floor maintenance',
        'Restroom sanitization',
        'Break room cleaning',
        'Trash removal',
        'Flexible scheduling'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-sand-500 mb-8">
                Services & Pricing
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Transparent
                <br />
                <span className="italic">Pricing</span>
              </h1>
              <p className="text-lg text-sand-600 leading-relaxed">
                Professional cleaning services tailored to your needs with honest, upfront pricing.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2940"
                alt="Eco-friendly cleaning supplies"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="h-px w-16 bg-sand-300 mb-8"></div>
                  {service.badge && (
                    <span className="inline-block text-xs uppercase tracking-wider text-sand-500 mb-4">
                      {service.badge}
                    </span>
                  )}
                  <h3 className="text-4xl font-serif font-light text-sand-900 mb-6">{service.name}</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-serif font-light text-sand-900">{service.price}</span>
                    <span className="text-sm text-sand-500 uppercase tracking-wider">{service.unit}</span>
                  </div>
                  <p className="text-lg text-sand-600 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <ul className="space-y-4 pt-12">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-sand-400 mr-4">—</span>
                        <span className="text-sand-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Get in Touch</p>
            <h2 className="text-5xl font-serif font-light text-sand-900">
              Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Phone</p>
              <a href="tel:+34607079332" className="text-xl text-sand-900 hover:text-sand-600 transition-colors">
                +34 607 079 332
              </a>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Hours</p>
              <p className="text-xl text-sand-900">Daily: 9:00 — 18:00</p>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Location</p>
              <p className="text-xl text-sand-900">Marbella, Spain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-sand-900 mb-8">Ready to Book?</h2>
          <p className="text-lg text-sand-600 mb-12">
            Contact us today for a free quote
          </p>
          <a
            href="/#booking"
            className="inline-block text-sm uppercase tracking-wider text-sand-50 bg-sand-900 px-10 py-4 hover:bg-sand-800 transition-all"
          >
            Book Your Cleaning
          </a>
        </div>
      </section>
    </div>
  )
}
