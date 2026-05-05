# Igue

## Cel projektu

Pomóc małym i średnim firmom pojawiać się jako cytowane źródło w sekcji **AI Overview** w wynikach wyszukiwania Google — bez konieczności znajomości SEO i bez współpracy z agencją.

## Co robi projekt

Igue to landing page narzędzia, w którym użytkownik:

1. Podaje adres swojej strony oraz frazę kluczową.
2. System sprawdza, czy Google generuje dla tej frazy AI Overview.
3. Generator zwraca gotowy blok HTML, dopasowany pod algorytm Google AI, do wklejenia w CMS (WordPress, Webflow, Wix, Shopify, itp.).

Strona zawiera również opis funkcji, kroków działania, cennik z trzema planami (Starter, Pro, Custom) oraz sekcję FAQ.

## Technologie

- **React 19** + **TypeScript**
- **Vite 7** — dev server i build
- **Tailwind CSS 4** — stylowanie
- **Framer Motion** — animacje
- **react-helmet-async** — dynamiczne meta tagi i schema.org JSON-LD
- **DOMPurify** — sanityzacja HTML zwracanego z generatora
- **Vercel Edge Functions** — proxy do webhooka n8n (`api/check.ts`)
- **n8n** — backendowy workflow generujący treść

## Hosting

Projekt jest przygotowany pod deploy na **Vercel** (zawiera `vercel.json` z security headers oraz funkcję serverless).

---

Projekt został wykonany przy użyciu **[Claude Code](https://claude.com/claude-code)**.
