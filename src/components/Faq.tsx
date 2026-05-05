import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import SectionWrapper from './ui/SectionWrapper'

const faqs = [
  {
    question: 'Czym jest AI Overview w Google?',
    answer: 'AI Overview to sekcja w wynikach wyszukiwania Google, w której sztuczna inteligencja generuje zwięzłą odpowiedź na zapytanie użytkownika. Pojawia się nad klasycznymi wynikami i cytuje konkretne strony jako źródła wiedzy. Bycie cytowanym oznacza bezpłatny, wysoko widoczny ruch organiczny.',
  },
  {
    question: 'Skąd bierzecie frazy dla mojej strony?',
    answer: 'Po podaniu adresu Twojej strony nasz system automatycznie analizuje Twoją branżę i wyszukuje frazy, dla których Google aktualnie generuje AI Overview. Nie musisz nic wpisywać ręcznie, wszystko odbywa się automatycznie.',
  },
  {
    question: 'Czy muszę znać się na SEO?',
    answer: 'Nie. Narzędzie zostało zaprojektowane tak, żeby działało bez wiedzy technicznej. Podajesz adres strony, a my dostarczamy gotowy HTML do wklejenia. Nie musisz rozumieć algorytmów ani szukać słów kluczowych.',
  },
  {
    question: 'Jak wklejam wygenerowany HTML na swoją stronę?',
    answer: 'Gotowy blok HTML możesz wkleić bezpośrednio w WordPress (edytor HTML), Webflow, Wix, Shopify lub dowolny inny CMS. Nie potrzebujesz dewelopera. Jeśli masz dostęp do edytora strony, dasz radę samodzielnie.',
  },
  {
    question: 'Po jakim czasie zobaczę efekty?',
    answer: 'Pierwsze efekty widoczne są zazwyczaj po 2 do 4 tygodniach od wdrożenia. Czas zależy od konkurencyjności branży i częstotliwości indeksowania strony przez Googlebota.',
  },
  {
    question: 'Czy plan Free wymaga karty kredytowej?',
    answer: 'Nie. Rejestracja i pierwsze generowanie są całkowicie bezpłatne. Karta kredytowa potrzebna jest dopiero przy przejściu na plan płatny.',
  },
  {
    question: 'Czy mogę używać narzędzia dla kilku stron?',
    answer: 'Tak. Każde generowanie możesz wykonać dla innego adresu URL. Jeśli prowadzisz kilka projektów lub stron, plan Pro będzie najbardziej opłacalny.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-blue-100 shadow-sm shadow-blue-50' : 'border-slate-100 hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${open ? 'text-blue-700' : 'text-slate-900'}`}>{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <HiOutlineChevronDown className={`w-4 h-4 transition-colors duration-200 ${open ? 'text-blue-500' : 'text-slate-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-5">
          FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
          Najczęstsze pytania
        </h2>
        <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
          Nie znalazłeś odpowiedzi? Napisz do nas na{' '}
          <a href="mailto:kontakt@igue.pl" className="text-blue-600 hover:underline">
            kontakt@igue.pl
          </a>
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FaqItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
