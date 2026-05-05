import { motion } from 'framer-motion'
import { HiOutlineMagnifyingGlass, HiOutlineDocumentText, HiOutlineCodeBracket } from 'react-icons/hi2'
import SectionWrapper from './ui/SectionWrapper'

const features = [
  {
    icon: HiOutlineMagnifyingGlass,
    title: 'Automatyczne wyszukiwanie fraz z AI Overview',
    description: 'Podajesz tylko adres swojej strony. System analizuje Twoją branżę i automatycznie wyszukuje frazy, dla których Google aktualnie generuje AI Overview, bez żadnego ręcznego research\'u.',
    gradient: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Treść pisana pod algorytm Google AI',
    description: 'Na podstawie aktualnego AI Overview tworzymy blok HTML z dokładną strukturą semantyczną, której Google szuka przy wyborze cytowanych źródeł. Każdy blok jest unikalny.',
    gradient: 'from-indigo-500 to-indigo-600',
    lightBg: 'bg-indigo-50',
    lightBorder: 'border-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: HiOutlineCodeBracket,
    title: 'Gotowy HTML: wklej w CMS i gotowe',
    description: 'Otrzymujesz czysty kod HTML gotowy do wklejenia w WordPress, Webflow, Wix lub Shopify. Zero dewelopera, zero konfiguracji. Pierwsze efekty zazwyczaj po 2–4 tygodniach od wdrożenia.',
    gradient: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-50',
    lightBorder: 'border-violet-100',
    iconColor: 'text-violet-600',
  },
]

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50/50">
      <SectionWrapper id="funkcje">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-5">
            Możliwości
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Frazy, treść i HTML.<br className="hidden sm:block" /> Wszystko generujemy za Ciebie
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Nie musisz znać się na SEO ani szukać słów kluczowych. Podajesz adres strony, resztę robimy my.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.07] blur-2xl transition-all duration-500`} />

              <div className={`w-12 h-12 rounded-xl ${feature.lightBg} border ${feature.lightBorder} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
