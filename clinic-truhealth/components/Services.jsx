'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Diabetes Management',
    desc: 'Comprehensive care for Type 1 & Type 2 diabetes including medication, diet planning, and lifestyle modifications.',
    icon: '🩸',
  },
  {
    title: 'Hypertension',
    desc: 'Diagnosis and long-term management of high blood pressure to protect heart and kidney health.',
    icon: '❤️',
  },
  {
    title: 'Cholesterol Care',
    desc: 'Lipid profile monitoring and evidence-based treatment to reduce cardiovascular risk.',
    icon: '🫀',
  },
  {
    title: 'PCOD / PCOS',
    desc: 'Hormonal disorder management with a focus on lifestyle, nutrition, and medical therapy.',
    icon: '🌿',
  },
  {
    title: 'Thyroid Disorders',
    desc: 'Thyroid function testing and treatment for hypothyroidism, hyperthyroidism, and related conditions.',
    icon: '🔬',
  },
  {
    title: 'Weight Management',
    desc: 'Medically supervised weight gain and loss programs combining clinical nutrition and lifestyle coaching.',
    icon: '⚖️',
  },
  {
    title: 'Child Vaccination',
    desc: 'Complete immunization schedules for infants and children as per national health guidelines.',
    icon: '👶',
  },
  {
    title: 'Blood Test',
    desc: 'In-clinic blood investigations for a wide range of diagnostic needs — quick, accurate, and affordable.',
    icon: '🧪',
  },
  {
    title: 'Urine Test',
    desc: 'Urinalysis and culture tests for infection screening, kidney function, and metabolic assessment.',
    icon: '🏥',
  },
]

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Services() {
  const headingRef = useFadeIn()

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="fade-in text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-3 block">
            What We Treat
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-4">Our Services</h2>
          <p className="text-[#555] max-w-xl mx-auto">
            From general medicine to specialised lifestyle disorder management — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-in group bg-[#F8F6F1] hover:bg-[#2D6A4F] rounded-2xl p-6 border border-[#B7935A]/10 transition-all duration-300 cursor-default">
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="font-playfair text-lg font-semibold text-[#1A1A1A] group-hover:text-white mb-2 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-[#555] group-hover:text-white/80 leading-relaxed transition-colors">
        {service.desc}
      </p>
    </div>
  )
}
