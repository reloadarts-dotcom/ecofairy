'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-sand-500 mb-8">
                Professional Cleaning Services
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Pristine Spaces
                <br />
                <span className="italic">in Marbella</span>
              </h1>
              <p className="text-lg md:text-xl text-sand-600 mb-12 leading-relaxed">
                Eco-friendly excellence for your home, office, and commercial spaces
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#booking"
                  className="text-sm uppercase tracking-wider text-sand-50 bg-sand-900 px-10 py-4 hover:bg-sand-800 transition-all text-center"
                >
                  Book Now
                </a>
                <a
                  href="tel:+34607079332"
                  className="text-sm uppercase tracking-wider text-sand-900 border border-sand-900 px-10 py-4 hover:bg-sand-100 transition-all text-center"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2940"
                alt="Eco-friendly cleaning products"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Our Services</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-sand-900">
              Tailored to Your Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Residential',
                price: '20€',
                unit: 'per hour',
                description: 'Complete home cleaning including kitchen, living areas, bedrooms, and bathrooms',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940'
              },
              {
                title: 'Deep Cleaning',
                price: '25€',
                unit: 'per hour',
                description: 'Thorough cleaning with cabinet care, upholstery, wood polishing, and detailed attention',
                image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2940'
              },
              {
                title: 'Airbnb',
                price: '25€',
                unit: 'per hour',
                description: 'Professional turnover service ensuring guest-ready perfection',
                image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2940'
              },
              {
                title: 'Commercial',
                price: '25€',
                unit: 'per hour',
                description: 'Office and commercial space maintenance for professional environments',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940'
              },
              {
                title: 'Post-Construction',
                price: '30€',
                unit: 'per hour',
                description: 'Comprehensive cleaning after renovation or construction work',
                image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940'
              },
              {
                title: 'Specialty',
                price: '+50€',
                unit: 'additional',
                description: 'Carpet and upholstery deep cleaning with professional equipment',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="mb-6">
                  <div className="h-px w-16 bg-sand-300 mb-8"></div>
                  <h3 className="text-3xl font-serif font-light text-sand-900 mb-4">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-serif font-light text-sand-900">{service.price}</span>
                    <span className="text-sm text-sand-500 uppercase tracking-wider">{service.unit}</span>
                  </div>
                  <p className="text-sand-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/pricelist"
              className="text-sm uppercase tracking-wider text-sand-900 border-b-2 border-sand-900 hover:border-sand-600 transition-colors pb-1"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Why EcoFairy</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-sand-900">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                title: 'Eco-Conscious',
                description: 'Natural, safe products that protect your health and our environment'
              },
              {
                title: 'Professional',
                description: 'Fully trained and insured team committed to excellence'
              },
              {
                title: 'Reliable',
                description: 'Consistent quality and punctual service you can trust'
              },
              {
                title: 'Satisfaction',
                description: 'Your complete satisfaction is our highest priority'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="h-px w-12 bg-sand-400 mx-auto mb-8"></div>
                <h3 className="text-2xl font-serif font-light text-sand-900 mb-4">{feature.title}</h3>
                <p className="text-sand-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Get Started</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-sand-900 mb-6">
              Book Your Service
            </h2>
            <p className="text-lg text-sand-600">
              We'll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Service Type</label>
                <select
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="airbnb">Airbnb Cleaning</option>
                  <option value="office">Commercial Cleaning</option>
                  <option value="construction">Post-Construction</option>
                  <option value="carpet">Carpet & Upholstery</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Preferred Date</label>
              <input
                type="date"
                required
                className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-sand-500 mb-3">Message (Optional)</label>
              <textarea
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-sand-300 focus:border-sand-900 outline-none transition-colors text-sand-900 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full text-sm uppercase tracking-wider text-sand-50 bg-sand-900 px-10 py-5 hover:bg-sand-800 transition-all"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
