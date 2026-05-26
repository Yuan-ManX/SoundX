import { useEffect, useRef, useState } from 'react'
import { Cpu, Zap, Shield, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const specIcons = [
  <Cpu className="w-4 h-4" />,
  <Zap className="w-4 h-4" />,
  <Shield className="w-4 h-4" />,
  <Globe className="w-4 h-4" />,
]

const specColors = ['#18cdf2', '#a855f7', '#22c55e', '#f97316']

export default function TechSpecs() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-6" style={{ background: '#1a1a1a' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="logic-section-title inline-block rounded-t-md">{t.techSpecs.sectionTitle}</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e5e5e5] mt-4 mb-2">
            {t.techSpecs.title}<span className="text-[#18cdf2]">{t.techSpecs.titleHighlight}</span>
          </h2>
        </div>

        <div className="logic-panel p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.techSpecs.specs.map((spec, i) => {
              const color = specColors[i]
              return (
                <div
                  key={i}
                  className={`p-4 rounded-md border border-white/[0.06] transition-all duration-700 hover:border-[${color}]/30 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-7 h-7 rounded flex items-center justify-center"
                      style={{ backgroundColor: color + '15', color }}
                    >
                      {specIcons[i]}
                    </div>
                    <span className="text-[#737373] font-mono text-[10px] uppercase tracking-wider">
                      {spec.label}
                    </span>
                  </div>

                  <div className="font-display text-lg font-bold text-[#e5e5e5] mb-1">
                    {spec.value}
                  </div>

                  <div className="text-[#737373] font-mono text-xs">
                    {spec.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
