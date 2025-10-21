import Image from 'next/image'

export default function PricelistPage() {
  const services = [
    {
      name: 'Limpieza Residencial',
      price: '20€',
      unit: 'por hora',
      description: 'Limpieza general de superficies de cocina, sala de estar, dormitorios y baños',
      features: [
        'Quitar el polvo de todas las superficies',
        'Aspirar y fregar pisos',
        'Limpieza de cocina',
        'Desinfección de baños',
        'Hacer las camas'
      ]
    },
    {
      name: 'Limpieza Profunda',
      price: '25€',
      unit: 'por hora',
      description: 'Lavado a mano de armarios, aspirado de tapicería, pulido de madera y limpieza del horno, aspas de ventiladores de techo, zócalos y más',
      features: [
        'Todo lo incluido en limpieza residencial',
        'Limpieza interior/exterior de armarios',
        'Limpieza profunda de electrodomésticos',
        'Limpieza de zócalos',
        'Limpieza de marcos de ventanas',
        'Desempolvado detallado'
      ]
    },
    {
      name: 'Limpieza Ecológica',
      price: '+20€',
      unit: 'adicional',
      badge: 'Complemento Eco',
      description: 'Productos de limpieza ecológicos seguros para el medio ambiente',
      features: [
        '100% productos naturales',
        'Soluciones no tóxicas',
        'Seguro para niños y mascotas',
        'Responsable con el medio ambiente',
        'Opciones sin alérgenos'
      ]
    },
    {
      name: 'Limpieza de Alfombras y Sofás',
      price: '+50€',
      unit: 'adicional',
      badge: 'Especialidad',
      description: 'Aspiradora húmeda especial y productos de limpieza',
      features: [
        'Equipo profesional',
        'Eliminación profunda de manchas',
        'Eliminación de olores',
        'Protección de tejidos',
        'Secado rápido'
      ]
    },
    {
      name: 'Post Construcción',
      price: '30€',
      unit: 'por hora',
      description: 'Aspirado, desempolvado, limpieza de superficies, limpieza de ventanas y eliminación de últimos restos de escombros',
      features: [
        'Eliminación de escombros',
        'Eliminación de polvo',
        'Limpieza de ventanas',
        'Limpieza profunda de pisos',
        'Pulido final',
        'Listo para habitar'
      ]
    },
    {
      name: 'Limpieza Airbnb',
      price: '25€',
      unit: 'por hora',
      description: 'Limpieza de baños, lavado de toallas y sábanas, aspirado de alfombras, barrido/fregado de pisos, limpieza de superficies y sacar la basura',
      features: [
        'Limpieza completa de baños',
        'Ropa de cama limpia',
        'Desinfección de cocina',
        'Retirada de basura',
        'Cambio rápido',
        'Preparación lista para huéspedes'
      ]
    },
    {
      name: 'Espacios Comerciales',
      price: '25€',
      unit: 'por hora',
      description: 'Limpieza profesional para oficinas, espacios comerciales y propiedades empresariales',
      features: [
        'Limpieza de escritorios y superficies',
        'Mantenimiento de pisos',
        'Desinfección de baños',
        'Limpieza de áreas de descanso',
        'Retirada de basura',
        'Horarios flexibles'
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
                Servicios y Precios
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Precios
                <br />
                <span className="italic">Transparentes</span>
              </h1>
              <p className="text-lg text-sand-600 leading-relaxed">
                Servicios de limpieza profesional adaptados a sus necesidades con precios honestos y claros.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2940"
                alt="Productos de limpieza ecológicos"
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
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Contáctenos</p>
            <h2 className="text-5xl font-serif font-light text-sand-900">
              Información de Contacto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Teléfono</p>
              <a href="tel:+34607079332" className="text-xl text-sand-900 hover:text-sand-600 transition-colors">
                +34 607 079 332
              </a>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Horario</p>
              <p className="text-xl text-sand-900">Diario: 9:00 — 18:00</p>
            </div>
            <div className="text-center">
              <div className="h-px w-12 bg-sand-400 mx-auto mb-6"></div>
              <p className="text-sm uppercase tracking-wider text-sand-500 mb-2">Ubicación</p>
              <p className="text-xl text-sand-900">Marbella, España</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-sand-900 mb-8">¿Listo para Reservar?</h2>
          <p className="text-lg text-sand-600 mb-12">
            Contáctenos hoy para un presupuesto gratuito
          </p>
          <a
            href="/#booking"
            className="inline-block text-sm uppercase tracking-wider text-sand-50 bg-sand-900 px-10 py-4 hover:bg-sand-800 transition-all"
          >
            Reserve Su Limpieza
          </a>
        </div>
      </section>
    </div>
  )
}
