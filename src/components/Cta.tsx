import { motion } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlineCheckCircle, HiOutlineSparkles } from 'react-icons/hi2'
import SectionWrapper from './ui/SectionWrapper'

const features = [
  '1 sprawdzenie po wejściu',
  'Automatyczne wyszukiwanie fraz z AI Overview',
  'Gotowy zoptymalizowany HTML do wklejenia',
  'Bez rejestracji, bez karty',
]

export default function Cta() {
  function scrollToGenerator(e: React.MouseEvent) {
    e.preventDefault()
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-slate-900" />

          <div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-16 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.6) 0%, transparent 70%)' }}
          />

          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">

              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-blue-300 mb-6">
                  <HiOutlineSparkles className="w-3.5 h-3.5" />
                  Zacznij za darmo
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                  Odbierz darmowe<br className="hidden sm:block" /> sprawdzenie frazy
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  Wpisz frazę i adres swojej strony, a my od razu sprawdzimy obecność AI Overview. Bez karty kredytowej, bez zobowiązań.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="#generator"
                    onClick={scrollToGenerator}
                    className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-slate-900 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Sprawdź swoją frazę teraz
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-slate-500">Bez karty kredytowej</span>
                </div>
              </div>

              <div className="lg:w-72 shrink-0">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-end gap-2.5 mb-5">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">Pakiet Free</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white leading-none">0 PLN</span>
                        <span className="text-sm text-slate-500 line-through">49 PLN</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/10 mb-5" />

                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <HiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                        <span className="text-sm text-slate-300 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
