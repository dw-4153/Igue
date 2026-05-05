const productLinks = [
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Sprawdź frazę', href: '#generator' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const companyLinks = [
  { label: 'Kontakt', href: 'mailto:kontakt@igue.pl' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 mb-3">
              Ig<span className="text-blue-600">ue</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pomagamy firmom pojawiać się w AI Overview Google. Bez wiedzy technicznej, bez agencji SEO.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Produkt</p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Firma</p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Ig<span className="text-blue-600">ue</span>. Wszelkie prawa zastrzeżone.
          </p>
          <a href="mailto:kontakt@igue.pl" className="text-slate-400 text-sm hover:text-slate-700 transition-colors">
            kontakt@igue.pl
          </a>
        </div>
      </div>
    </footer>
  )
}
