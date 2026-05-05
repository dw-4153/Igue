import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2'

const starter = {
  name: 'Starter',
  priceLabel: '49 PLN',
  period: 'miesięcznie',
  description: 'Dla każdego, kto chce regularnie pojawiać się w AI Overview i budować widoczność swojej firmy w Google.',
  features: [
    '5 generowań miesięcznie',
    'Automatyczne wyszukiwanie fraz',
    'Gotowy zoptymalizowany HTML',
    'Historia generowań',
    'Wsparcie e-mail',
  ],
  cta: 'Wybierz Starter',
  href: '#generator',
}

const pro = {
  name: 'Pro',
  priceLabel: '89 PLN',
  period: 'miesięcznie',
  description: 'Dla firm, które chcą maksymalnej widoczności. Generujemy treści i publikujemy je bezpośrednio na Twojej stronie.',
  features: [
    '20 generowań miesięcznie',
    'Automatyczne wyszukiwanie fraz',
    'Gotowy zoptymalizowany HTML',
    'Publikacja treści na stronie klienta',
    'Historia generowań',
    'Priorytetowe wsparcie e-mail',
    'Wcześniejszy dostęp do nowych funkcji',
  ],
  cta: 'Wybierz Pro',
  href: '#generator',
}

const MIN_GENS = 15
const MAX_GENS = 100
const STEP = 5

function calcCustomPrice(gens: number) {
  return 99 + Math.max(0, Math.ceil((gens - MIN_GENS) / STEP)) * 40
}

function scrollToHref(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('#')) return
  e.preventDefault()
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
}

function CustomPlan() {
  const [gens, setGens] = useState(25)
  const price = calcCustomPrice(gens)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm"
    >
      <div className="p-7 flex-1">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">Custom</p>

        <div className="mb-1">
          <span className="text-5xl font-black leading-none text-slate-900">{price} PLN</span>
        </div>
        <p className="text-sm mb-5 text-slate-400">miesięcznie</p>

        <div className="h-px mb-5 bg-slate-100" />

        <p className="text-sm leading-relaxed mb-6 text-slate-500">
          Dobierz liczbę generowań do swoich potrzeb. Cena dostosowuje się automatycznie.
        </p>

        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Generowania miesięcznie</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGens(g => Math.max(MIN_GENS, g - STEP))}
              className="size-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <HiOutlineMinus className="w-3.5 h-3.5" />
            </button>
            <div className="flex-1 text-center">
              <span className="text-2xl font-black text-slate-900">{gens}</span>
            </div>
            <button
              onClick={() => setGens(g => Math.min(MAX_GENS, g + STEP))}
              className="size-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <HiOutlinePlus className="w-3.5 h-3.5" />
            </button>
          </div>
          <input
            type="range"
            min={MIN_GENS}
            max={MAX_GENS}
            step={STEP}
            value={gens}
            onChange={e => setGens(Number(e.target.value))}
            className="w-full mt-3 accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-300 mt-1">
            <span>{MIN_GENS}</span>
            <span>{MAX_GENS}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {[
            'Automatyczne wyszukiwanie fraz',
            'Gotowy zoptymalizowany HTML',
            'Publikacja treści na stronie klienta',
            'Historia generowań',
            'Dedykowany opiekun konta',
          ].map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <HiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
              <span className="text-sm text-slate-600">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-7 pb-7">
        <a
          href="mailto:kontakt@igue.pl"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
        >
          Skontaktuj się z nami
          <HiOutlineArrowRight className="w-4 h-4" />
        </a>
        <p className="text-center text-[11px] mt-2.5 text-slate-400">Indywidualna wycena w 24h</p>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-5">
            Cennik
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Przejrzyste ceny,<br className="hidden sm:block" /> bez ukrytych opłat
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Wybierz plan dopasowany do skali działania. Możesz zacząć od Startera i przejść wyżej w dowolnym momencie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm"
          >
            <div className="p-7 flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-slate-400">{starter.name}</p>
              <div className="mb-1">
                <span className="text-5xl font-black leading-none text-slate-900">{starter.priceLabel}</span>
              </div>
              <p className="text-sm mb-5 text-slate-400">{starter.period}</p>
              <div className="h-px mb-5 bg-slate-100" />
              <p className="text-sm leading-relaxed mb-6 text-slate-500">{starter.description}</p>
              <ul className="space-y-3">
                {starter.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <HiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
                    <span className="text-sm text-slate-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-7 pb-7">
              <a
                href={starter.href}
                onClick={(e) => scrollToHref(e, starter.href)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 bg-white border border-slate-200 text-slate-900 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50"
              >
                {starter.cta}
                <HiOutlineArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] mt-2.5 text-slate-400">Bez karty kredytowej</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 shadow-2xl shadow-blue-200 md:-mt-4 md:-mb-4"
          >
            <div className="absolute top-4 right-4 bg-white/20 border border-white/30 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              Najpopularniejszy
            </div>
            <div className="p-7 flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-200">{pro.name}</p>
              <div className="mb-1">
                <span className="text-5xl font-black leading-none text-white">{pro.priceLabel}</span>
              </div>
              <p className="text-sm mb-5 text-blue-200">{pro.period}</p>
              <div className="h-px mb-5 bg-white/20" />
              <p className="text-sm leading-relaxed mb-6 text-blue-100">{pro.description}</p>
              <ul className="space-y-3">
                {pro.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <HiOutlineCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-300" />
                    <span className="text-sm text-blue-100">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-7 pb-7">
              <a
                href={pro.href}
                onClick={(e) => scrollToHref(e, pro.href)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 bg-white text-blue-700 hover:bg-blue-50"
              >
                {pro.cta}
                <HiOutlineArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] mt-2.5 text-blue-300">Bez karty kredytowej</p>
            </div>
          </motion.div>

          <CustomPlan />

        </div>
      </div>
    </section>
  )
}
