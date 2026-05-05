import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi2'

function AIOBrowserMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
      {/* Chrome top bar */}
      <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-3 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-amber-400" />
          <div className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[11px] text-slate-400 border border-slate-200 flex items-center gap-1.5 truncate">
          <svg className="size-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          google.com/search?q=najlepsza+agencja+seo+warszawa
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3 bg-white">
        {/* Google search bar */}
        <div className="flex items-center gap-2.5">
          <span className="text-base font-black tracking-tight leading-none shrink-0">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-amber-400">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-emerald-500">l</span>
            <span className="text-red-500">e</span>
          </span>
          <div className="flex-1 border border-slate-300 rounded-full px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-700 shadow-sm">
            <span>najlepsza agencja SEO Warszawa</span>
            <svg className="size-3 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* AI Overview box */}
        <div className="rounded-xl p-px bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
          <div className="rounded-[11px] bg-white p-3 space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="size-4 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shrink-0">
                <span className="text-white text-[7px] font-bold">✦</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-800">AI Przegląd</span>
              <span className="ml-auto text-[9px] text-slate-400 font-medium bg-slate-50 px-1.5 py-0.5 rounded">Gemini</span>
            </div>
            <div className="space-y-1.5 text-[10px] text-slate-600 leading-relaxed">
              <div className="flex gap-1.5 items-start">
                <span className="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
                <span>Najlepsza agencja SEO powinna posiadać udokumentowane case studies i mierzalne wyniki dla klientów...</span>
              </div>
              <div className="flex gap-1.5 items-start">
                <span className="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
                <span>Warto sprawdzić opinie, zakres usług oraz transparentność raportowania i rozliczeń.</span>
              </div>
              <div className="flex gap-1.5 items-start">
                <span className="text-blue-500 font-bold mt-0.5 shrink-0">•</span>
                <span>Doświadczone agencje specjalizują się w SEO technicznym, content marketingu i link buildingu.</span>
              </div>
            </div>
            <div className="pt-1.5 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
              <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                <svg className="size-2.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[9px] font-semibold text-emerald-700">twojafirma.pl</span>
              </div>
              <span className="text-[9px] text-slate-400">+3 źródła</span>
            </div>
          </div>
        </div>

        {/* Organic results */}
        <div className="pt-0.5">
          <div className="space-y-0.5 bg-blue-50/40 -mx-1 px-1 py-1 rounded-lg">
            <div className="text-[9px] font-medium text-emerald-600">twojafirma.pl</div>
            <div className="text-[11px] font-semibold leading-tight text-blue-700">Agencja SEO Warszawa · Sprawdzone wyniki</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-0">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-32 w-[900px] h-[600px] rounded-full opacity-[0.35]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #bfdbfe 0%, #e0e7ff 40%, transparent 75%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 w-full">

        <div className="flex flex-col items-center text-center pt-10 pb-8">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight max-w-3xl"
          >
            Bądź cytowany przez
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-clip-text text-transparent">
              AI Overview
            </span>
            {' '}Google
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mt-5"
          >
            Analizujemy Twoją stronę, wyszukujemy frazy z AI Overview i dostarczamy gotowy HTML do wklejenia. Bez szukania słów kluczowych, bez agencji SEO.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[780px]"
          style={{ perspective: '1200px' }}
        >
          <div
            className="absolute -inset-x-8 top-8 bottom-0 -z-10 rounded-3xl opacity-50 blur-2xl"
            style={{ background: 'radial-gradient(ellipse at 50% 30%, #bfdbfe, #e0e7ff 60%, transparent)' }}
          />

          <motion.div
            initial={{ rotateX: 10 }}
            animate={{ rotateX: 3 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ rotateX: 0, transition: { duration: 0.5 } }}
            className="rounded-2xl ring-1 ring-slate-200/80 shadow-[0_32px_80px_-12px_rgba(37,99,235,0.18),0_4px_16px_-4px_rgba(0,0,0,0.08)]"
          >
            <AIOBrowserMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-4 -right-4 sm:top-2 sm:right-2 z-10 bg-white border border-slate-200 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-slate-200/60 flex items-center gap-2.5"
          >
            <div className="size-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <svg className="size-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-800 leading-tight">Twoja firma</p>
              <p className="text-[10px] text-emerald-600 font-semibold">w AI Overview</p>
            </div>
          </motion.div>

          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent rounded-b-2xl pointer-events-none" />
        </motion.div>

        <div className="flex flex-col items-center text-center pt-10 pb-16 space-y-4">
          <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo('generator')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Sprawdź swoją frazę <HiOutlineArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('jak-dziala')}
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              Jak to działa?
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.75)} className="flex items-center gap-4 text-xs text-slate-400 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <svg className="size-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bez karty kredytowej
            </span>
            <span className="size-1 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1.5">
              <svg className="size-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              1 sprawdzenie gratis
            </span>
            <span className="size-1 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1.5">
              <svg className="size-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Anuluj kiedy chcesz
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
