import { motion } from 'framer-motion'
import { HiOutlineChartBar, HiOutlineCursorArrowRays, HiOutlineGlobeAlt, HiOutlineBanknotes } from 'react-icons/hi2'
import SectionWrapper from './ui/SectionWrapper'

const stats = [
  {
    icon: HiOutlineChartBar,
    value: '30%+',
    label: 'zapytań w Google generuje AI Overview',
    description: 'Co trzecie wyszukiwanie kończy się odpowiedzią AI, bez kliknięcia w jakikolwiek link. Ten odsetek rośnie każdego miesiąca.',
  },
  {
    icon: HiOutlineCursorArrowRays,
    value: '2×',
    label: 'wyższy CTR ze źródeł cytowanych przez AI',
    description: 'Strony wymienione przez AI Overview jako źródło wiedzy notują dwukrotnie wyższy ruch organiczny niż klasyczne pozycje w wynikach.',
  },
  {
    icon: HiOutlineGlobeAlt,
    value: '1 mld',
    label: 'wyświetleń AI Overview miesięcznie',
    description: 'Zasięg AI Overview dorównuje już największym platformom reklamowym, przy zerowym koszcie za wyświetlenie dla cytowanych stron.',
  },
  {
    icon: HiOutlineBanknotes,
    value: '0 zł',
    label: 'kosztu za każde kliknięcie',
    description: 'Cytowanie w AI Overview to bezpłatny ruch organiczny, trwały i niezależny od budżetu reklamowego. Raz zoptymalizowana strona pracuje bez przerwy.',
  },
]

export default function WhyAio() {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-24 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
      />
      <SectionWrapper id="dlaczego">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-800 mb-5">
            Dlaczego teraz?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            AI Overview to nowy standard wyszukiwania,<br className="hidden sm:block" /> nie eksperyment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Google wdrożyło AI Overview globalnie. Miliony ludzi codziennie dostaje odpowiedzi od AI zamiast klikać w linki. Jeśli Twoja firma nie pojawi się wśród cytowanych źródeł, ten ruch trafi do konkurencji.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-700/60 hover:bg-slate-800 transition-all duration-300 overflow-hidden"
            >
              {/* Card hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
              />
              <div className="w-10 h-10 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center mb-5 group-hover:border-blue-700/50 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-5xl font-black mb-2 leading-none bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mb-2.5 leading-snug">{stat.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
