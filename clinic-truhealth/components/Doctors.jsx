'use client'

import { useEffect, useRef } from 'react'

const team = [
  {
    name: 'Dr. Shifa Sayyed Bijapure',
    qualifications: 'BAMS, PGDEMS, DIDM, CCM',
    role: 'General Physician & Surgeon',
    desc: 'Dr. Shifa brings extensive expertise in general medicine and surgical care, offering patients accurate diagnoses and effective treatments for acute and chronic conditions.',
    color: 'bg-[#2D6A4F]',
    initials: 'SS',
  },
  {
    name: 'Dr. Asiya Sayyed',
    qualifications: 'BAMS, PGDEMS, DIDM, DIHM',
    role: 'Consultant — Lifestyle Disorder Management',
    desc: 'Known for her patient-first approach, Dr. Asiya specialises in managing lifestyle disorders including diabetes, hypertension, PCOD, and thyroid conditions. Patients consistently praise her thoroughness and compassion.',
    color: 'bg-[#B7935A]',
    initials: 'AS',
  },
  {
    name: 'Nazneen Shaikh',
    qualifications: 'BSc, PG-Dietetics',
    role: 'Clinical Nutritionist',
    desc: 'Nazneen provides personalised nutrition counselling with proven results in weight management, metabolic health, and disease-specific diet planning.',
    color: 'bg-[#4A7C6F]',
    initials: 'NS',
  },
]

export default function Doctors() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="doctors" className="py-24 px-6 md:px-12 bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="fade-in text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-3 block">
            Meet the Team
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-4">Our Specialists</h2>
          <p className="text-[#555] max-w-xl mx-auto">
            Three qualified specialists working together to provide comprehensive, holistic care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <DoctorCard key={member.name} member={member} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorCard({ member, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => el.classList.add('visible'), delay)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-in bg-white rounded-3xl p-8 border border-[#B7935A]/10 shadow-sm hover:shadow-md transition-shadow">
      {/* Avatar */}
      <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center mb-6`}>
        <span className="text-white font-playfair text-xl font-bold">{member.initials}</span>
      </div>

      <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
      <p className="text-xs font-semibold text-[#B7935A] mb-2 tracking-wide">{member.qualifications}</p>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-4 pb-4 border-b border-[#F0EBE3]">
        {member.role}
      </p>
      <p className="text-sm text-[#555] leading-relaxed">{member.desc}</p>
    </div>
  )
}
