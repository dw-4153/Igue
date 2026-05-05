import { motion } from 'framer-motion'
import { HiOutlinePencilSquare, HiOutlineMagnifyingGlass, HiOutlineDocumentMagnifyingGlass, HiOutlineCodeBracket } from 'react-icons/hi2'
import SectionWrapper from './ui/SectionWrapper'

const steps = [
  {
    num: '1',
    icon: HiOutlinePencilSquare,
    title: 'Podaj adres swojej strony',
    description: 'Wpisujesz URL swojej strony lub konkretnej podstrony. Nie musisz znać żadnych fraz, system zajmie się resztą.',
  },
  {
    num: '2',
    icon: HiOutlineMagnifyingGlass,
    title: 'Generujemy gotowe frazy z AI Overview',
    description: 'Automatycznie wyszukujemy frazy z Twojej branży, dla których Google aktualnie wyświetla AI Overview, bez żadnego ręcznego keyword research\'u z Twojej strony.',
  },
  {
    num: '3',
    icon: HiOutlineDocumentMagnifyingGlass,
    title: 'Analiza i dobór najlepszych możliwości',
    description: 'System ocenia szansę na cytowanie dla każdej frazy i wskazuje te, gdzie Twoja strona ma największy potencjał pojawienia się w AI Overview.',
  },
  {
    num: '4',
    icon: HiOutlineCodeBracket,
    title: 'Gotowy HTML: wklejasz i czekasz na efekty',
    description: 'Dla każdej wybranej frazy dostajesz gotowy blok HTML. Wklejasz go w CMS i Google zaczyna traktować Cię jako wiarygodne źródło wiedzy.',
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <SectionWrapper id="jak-dziala">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-5">
            Jak to działa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Podajesz adres strony,<br className="hidden sm:block" /> my robimy całą resztę
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Zero keyword research'u, zero agencji. Od adresu URL do gotowego HTML w mniej niż minutę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Decorative large background number */}
              <div className="absolute -top-3 right-3 text-7xl font-black select-none leading-none pointer-events-none bg-gradient-to-br from-blue-200 to-blue-100 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-200 transition-all duration-300">
                {step.num}
              </div>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1.5">Krok {step.num}</p>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connector hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center mt-8 gap-2 text-slate-300 text-sm"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-200" />
          <span className="text-xs text-slate-400 font-medium">Cały proces w &lt; 30 sekund</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-200" />
        </motion.div>
      </SectionWrapper>
    </div>
  )
}
