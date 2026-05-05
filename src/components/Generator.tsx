import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import DOMPurify from 'dompurify'
import Button from './ui/Button'
import { Input } from './ui/Input'
import LoadingSpinner from './ui/LoadingSpinner'
import { useCheckAio } from '../hooks/useGenerateContent'

const trustItems = [
  { icon: HiOutlineBolt, label: 'Wynik w < 30 sekund' },
  { icon: HiOutlineShieldCheck, label: 'Bez rejestracji' },
  { icon: HiOutlineSparkles, label: 'Gotowy HTML do wklejenia' },
]

export default function Generator() {
  const { result, isLoading, error, check, reset, timeRemaining } = useCheckAio()
  const [keyword, setKeyword] = useState('')
  const [clientUrl, setClientUrl] = useState('')
  const [submittedKeyword, setSubmittedKeyword] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = (html: string) => {
    navigator.clipboard.writeText(html).then(() => {
      setCopied(true)
      toast.success('Skopiowano HTML')
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) {
      toast.error('Podaj frazę kluczową')
      return
    }
    if (!clientUrl.trim()) {
      toast.error('Podaj adres URL strony')
      return
    }
    setSubmittedKeyword(keyword.trim())
    check(keyword.trim(), clientUrl.trim())
  }

  const handleReset = () => {
    reset()
    setKeyword('')
    setClientUrl('')
    setSubmittedKeyword('')
  }

  return (
    <section id="generator" className="relative overflow-hidden scroll-mt-24">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />

      {/* Decorative orbs */}
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }}
      />
      <div
        className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(165,180,252,0.35) 0%, transparent 65%)' }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-100 border border-white/20 mb-5 backdrop-blur-sm">
            <HiOutlineSparkles className="w-3.5 h-3.5" />
            Sprawdź na żywo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            Sprawdź swoją frazę<br className="hidden sm:block" /> w AI Overview
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Wpisz frazę i adres swojej strony. W kilkanaście sekund zobaczysz, czy Google generuje dla niej AI Overview, a my dorzucimy gotowy blok HTML.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow behind card */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.4), transparent 70%)' }}
            />

            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-900/30 ring-1 ring-white/40 overflow-hidden">
              {/* Card header strip */}
              <div className="px-6 sm:px-8 py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex items-center gap-3">
                <div className="size-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                  <HiOutlineSparkles className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 leading-tight">Generator AI Overview</p>
                  <p className="text-[11px] text-slate-400">Sprawdzenie w czasie rzeczywistym</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-slate-500">Online</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {timeRemaining && (
                  <div className="mb-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4 shrink-0" />
                    Następne sprawdzenie dostępne za <strong>{timeRemaining}</strong>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    label="Fraza kluczowa"
                    placeholder="np. najlepsze buty do biegania, dieta ketogeniczna..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    disabled={isLoading}
                  />
                  <Input
                    label="Adres URL Twojej strony"
                    placeholder="np. https://twojadomena.pl/strona"
                    value={clientUrl}
                    onChange={(e) => setClientUrl(e.target.value)}
                    disabled={isLoading}
                  />

                  <Button
                    type="submit"
                    disabled={isLoading || !!timeRemaining}
                    className="w-full flex items-center justify-center gap-2 shadow-lg shadow-blue-300/40 hover:shadow-blue-400/50 hover:-translate-y-0.5"
                  >
                    <HiOutlineMagnifyingGlass className="w-5 h-5" />
                    {isLoading ? 'Sprawdzanie...' : 'Sprawdź frazę'}
                  </Button>
                </form>

                <AnimatePresence mode="wait">
                  {isLoading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <LoadingSpinner />
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  {result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6"
                    >
                      {result.hasAioOverview ? (
                        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                          <HiOutlineCheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5 hidden sm:block" />
                          <div>
                            <p className="text-emerald-700 font-semibold mb-1">AI Overview istnieje dla tej frazy</p>
                            <p className="text-slate-600 text-sm">
                              Dla frazy „{submittedKeyword}" wyszukiwarki generują AI Overview. Warto zoptymalizować treść na Twojej stronie, aby pojawić się jako źródło referencyjne.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                          <HiOutlineXCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5 hidden sm:block" />
                          <div>
                            <p className="text-amber-700 font-semibold mb-1">Brak AI Overview dla tej frazy</p>
                            <p className="text-slate-600 text-sm">
                              Dla frazy „{submittedKeyword}" wyszukiwarki nie generują jeszcze AI Overview. Możesz spróbować innej frazy lub poczekać — AI Overview jest ciągle rozszerzane.
                            </p>
                          </div>
                        </div>
                      )}

                      {result.generatedHtml && (
                        <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200">
                            <span className="text-slate-500 text-xs uppercase tracking-wider">Wygenerowana treść</span>
                            <button
                              onClick={() => handleCopy(result.generatedHtml!)}
                              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                            >
                              {copied ? <HiOutlineClipboardDocumentCheck className="w-4 h-4 text-emerald-600" /> : <HiOutlineClipboardDocument className="w-4 h-4" />}
                              {copied ? 'Skopiowano' : 'Kopiuj HTML'}
                            </button>
                          </div>
                          <div
                            className="aio-content p-4 sm:p-5"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(result.generatedHtml, { ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'br'] }) }}
                          />
                        </div>
                      )}

                      <div className="flex gap-3 mt-4">
                        <Button variant="secondary" onClick={handleReset} className="flex items-center gap-2 text-sm">
                          <HiOutlineArrowPath className="w-4 h-4" />
                          Sprawdź inną frazę
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-blue-100/90 text-sm">
                <item.icon className="w-4 h-4 shrink-0 text-blue-200" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
