'use client'

import { useEffect, useRef } from 'react'

const schedule = [
  { day: 'Monday – Saturday', morning: '10:00 AM – 1:00 PM', evening: '5:00 PM – 10:00 PM' },
  { day: 'Sunday', morning: 'Closed', evening: '—' },
]

export default function Timings() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="timings" className="py-24 px-6 md:px-12 bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D6A4F] mb-3 block">Visit Us</span>
          <h2 className="font-playfair text-4xl font-bold text-[#1A1A1A]">Timings & Location</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timings */}
          <div ref={leftRef} className="fade-in bg-white rounded-3xl p-8 shadow-sm border border-[#B7935A]/10">
            <h3 className="font-playfair text-2xl font-semibold text-[#1A1A1A] mb-6">Clinic Hours</h3>

            <div className="space-y-4">
              {schedule.map(({ day, morning, evening }) => (
                <div key={day} className="pb-4 border-b border-[#F0EBE3] last:border-0">
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-2">{day}</p>
                  <div className="flex gap-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${morning === 'Closed' ? 'bg-red-50 text-red-500' : 'bg-[#2D6A4F]/10 text-[#2D6A4F]'} font-medium`}>
                      {morning}
                    </span>
                    {evening !== '—' && (
                      <span className="text-sm px-3 py-1 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] font-medium">
                        {evening}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#F8F6F1] rounded-2xl">
              <p className="text-sm font-semibold text-[#1A1A1A] mb-1">📍 Address</p>
              <p className="text-sm text-[#555] leading-relaxed">
                Shop No. 28, Kohinoor B-Zone,<br />
                Salunke Vihar Road, Opp. Aarzu Cafe,<br />
                Kondhwa, Pune, Maharashtra 411040
              </p>
            </div>

            <a href="tel:+918830893118"
              className="mt-6 flex items-center gap-3 p-4 bg-[#2D6A4F] text-white rounded-2xl hover:bg-[#245c43] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              <div>
                <p className="text-xs opacity-75">Call for appointment</p>
                <p className="font-semibold">+91 88308 93118</p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div ref={rightRef} className="fade-in bg-white rounded-3xl overflow-hidden shadow-sm border border-[#B7935A]/10 min-h-[400px] flex flex-col">
            <div className="p-5 flex items-center justify-between border-b border-[#F0EBE3]">
              <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A]">Find Us</h3>
              <a href="https://www.google.com/maps/dir//Shop+No.+28,+Kohinoor+B-Zone,+Salunke+Vihar+Rd,+Kondhwa,+Pune+411040"
                target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold text-[#2D6A4F] hover:underline flex items-center gap-1">
                Get Directions →
              </a>
            </div>
            <div className="flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.9!2d73.8941!3d18.4761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb6fab1ed1e1%3A0xda23e11d159c9196!2sTruHealth%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TruHealth Clinic Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
