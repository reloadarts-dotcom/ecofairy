import Image from 'next/image'

export default function AboutPageES() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-sand-500 mb-8">
                Sobre Nosotros
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-sand-900 mb-8 leading-tight">
                Excelencia en
                <br />
                <span className="italic">Cada Limpieza</span>
              </h1>
              <p className="text-lg text-sand-600 leading-relaxed">
                Brindando limpieza profesional ecológica en el corazón de Marbella desde el primer día.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2940"
                alt="Servicio de limpieza profesional"
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
              <h2 className="text-4xl font-serif font-light text-sand-900 mb-8">Quiénes Somos</h2>
              <p className="text-lg text-sand-600 leading-relaxed mb-6">
                EcoFairy es un servicio de limpieza profesional ubicado en el corazón de Marbella, España.
                Nos especializamos en proporcionar servicios de limpieza de alta calidad tanto para espacios
                residenciales como comerciales.
              </p>
              <p className="text-lg text-sand-600 leading-relaxed">
                Nuestra dedicación a la excelencia y atención al detalle nos distingue en la región de la Costa del
                Sol, donde servimos con orgullo a la vibrante comunidad con profesionalismo y cuidado.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team.png"
                alt="Equipo EcoFairy"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2940"
                alt="Limpieza profesional"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-px w-16 bg-sand-300 mb-8"></div>
              <h2 className="text-4xl font-serif font-light text-sand-900 mb-8">Nuestra Misión</h2>
              <p className="text-lg text-sand-600 leading-relaxed mb-6">
                Estamos comprometidos a superar las expectativas de los clientes a través del profesionalismo,
                la confiabilidad y una profunda pasión por crear espacios inmaculados.
              </p>
              <p className="text-lg text-sand-600 leading-relaxed">
                Nuestros profesionales de limpieza completamente capacitados y asegurados utilizan productos
                ecológicos y las últimas técnicas de limpieza para garantizar que su espacio no solo esté
                impecable sino también seguro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-widest text-sand-500 mb-4">Nuestros Valores</p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-sand-900">
              Lo Que Nos Impulsa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Ecológico</h3>
              <p className="text-sand-600 leading-relaxed">
                Utilizamos productos ambientalmente seguros que protegen su salud y nuestro planeta.
                La sostenibilidad está en el núcleo de todo lo que hacemos.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Profesional</h3>
              <p className="text-sand-600 leading-relaxed">
                Nuestro equipo está completamente capacitado, asegurado y dedicado a brindar excelencia
                en cada servicio que proporcionamos.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Enfocado en la Calidad</h3>
              <p className="text-sand-600 leading-relaxed">
                Nos enorgullecemos de nuestra atención al detalle y compromiso con resultados impecables
                que superan las expectativas.
              </p>
            </div>

            <div>
              <div className="h-px w-16 bg-sand-400 mb-8"></div>
              <h3 className="text-3xl font-serif font-light text-sand-900 mb-6">Cliente Primero</h3>
              <p className="text-sand-600 leading-relaxed">
                Su satisfacción es nuestra prioridad. Estamos aquí para servir a la comunidad de la Costa del Sol
                con dedicación y cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-sand-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-light text-sand-50 mb-8">
            Experimente la Diferencia
          </h2>
          <p className="text-lg text-sand-300 mb-12 max-w-2xl mx-auto">
            Reserve su servicio de limpieza hoy y descubra por qué Marbella confía en EcoFairy
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/#reservar"
              className="text-sm uppercase tracking-wider text-sand-900 bg-sand-50 px-10 py-4 hover:bg-sand-100 transition-all"
            >
              Reservar Ahora
            </a>
            <a
              href="tel:+34607079332"
              className="text-sm uppercase tracking-wider text-sand-50 border border-sand-50 px-10 py-4 hover:bg-sand-800 transition-all"
            >
              Llamarnos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
