import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyAio from './components/WhyAio'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Generator from './components/Generator'
import Cta from './components/Cta'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Footer from './components/Footer'

const SITE_URL = 'https://igue.pl'
const OG_IMAGE = `${SITE_URL}/og-image.png`

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Czym jest AI Overview w Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Overview to sekcja w wynikach wyszukiwania Google, w której sztuczna inteligencja generuje zwięzłą odpowiedź na zapytanie użytkownika. Pojawia się nad klasycznymi wynikami i cytuje konkretne strony jako źródła wiedzy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy muszę znać się na SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nie. Podajesz tylko adres swojej strony, a my automatycznie wyszukujemy frazy i generujemy gotowy HTML do wklejenia. Bez wiedzy technicznej, bez agencji SEO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Po jakim czasie zobaczę efekty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pierwsze efekty widoczne są zazwyczaj po 2 do 4 tygodniach od wdrożenia. Czas zależy od konkurencyjności branży i częstotliwości indeksowania strony przez Googlebota.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy plan Free wymaga karty kredytowej?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nie. Rejestracja i pierwsze generowanie są całkowicie bezpłatne. Karta kredytowa potrzebna jest dopiero przy przejściu na plan płatny.',
      },
    },
  ],
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Igue',
  url: SITE_URL,
  description: 'Podajesz adres swojej strony, my automatycznie wyszukujemy frazy z AI Overview Google i dostarczamy gotowy HTML do wklejenia. Bez agencji SEO, bez wiedzy technicznej.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'pl',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'PLN' },
    { '@type': 'Offer', name: 'Starter', price: '49', priceCurrency: 'PLN', billingIncrement: 'P1M' },
    { '@type': 'Offer', name: 'Pro', price: '89', priceCurrency: 'PLN', billingIncrement: 'P1M' },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Igue',
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  email: 'kontakt@igue.pl',
  sameAs: [],
}

export default function App() {
  const title = 'Igue | Bądź cytowany przez AI Overview Google'
  const description = 'Podajesz adres swojej strony, my automatycznie wyszukujemy frazy z AI Overview Google i dostarczamy gotowy HTML do wklejenia. Bez agencji SEO, bez wiedzy technicznej. Pierwsze generowanie gratis.'

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="AI Overview, SEO, Google AI, frazy kluczowe, content SEO, generator treści, optymalizacja SEO, AI SEO" />
        <meta name="author" content="Igue" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Igue — generator treści dla AI Overview Google" />
        <meta property="og:site_name" content="Igue" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.08)',
          },
        }}
      />

      <div className="bg-white text-slate-900 font-sans min-h-screen">
        <Navbar />
        <main id="main">
          <Hero />
          <WhyAio />
          <Features />
          <HowItWorks />
          <Generator />
          <Cta />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  )
}
