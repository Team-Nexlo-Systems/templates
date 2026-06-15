'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Mohd Saleem Sayyad',
    text: 'It\'s so refreshing to find a genuine doctor like Dr. Asiya Sayyad. Her diagnosis is amazingly spot on and medication prescribed is quite effective in improving health.',
    stars: 5,
  },
  {
    name: 'Jatin Oswal',
    text: 'I really liked the way Dr. Asiya talks and tries to connect more to know the exact problem. She is very patient, polite and caring. Always gives good healthy tips to lead a better life.',
    stars: 5,
  },
  {
    name: 'Dr. Naziya Pathan',
    text: 'Very professional and knowledgeable doctor. Highly recommended as the best General Physician in and around Salunkhe Vihar, Wanowrie, NIBM, Kondhwa and Undri area.',
    stars: 5,
  },
  {
    name: 'Zainab Azad',
    text: 'I have been consulting for 2 months regarding weight loss and it has amazing results — very healthy way. I have lost 10 kgs. Thank you!',
    stars: 5,
  },
  {
    name: 'Armaity Postvala',
    text: 'Best doctor — very nice, warm and friendly. She gives ayurvedic treatment too when required.',
    stars: 5,
  },
  {
    name: 'Nabila Sayed',
    text: 'Totally impressed by the way Dr. Aasiya and Shifa communicate and medicate their patients and their dedication towards patient follow-up. Simple, humble, sober, gentle.',
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#B7935A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }) {
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
    <div ref={ref} className="fade-in bg-white rounded-2xl p-6 border border-[#B7935A]/10 shadow-sm">
      <StarRating count={t.stars} />
      <p className="text-sm text-[#444] leading-relaxed mb-5 italic">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
          <span className="text-xs font-bold text-[#2D6A4F]">{t.name[0]}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
          <p className="text-xs text-[#888]">Google Review</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="fade-in text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-3 block">
            Patient Stories
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A] mb-4">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-[#B7935A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#555] font-semibold">5.0 · 40 Reviews on Google</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
