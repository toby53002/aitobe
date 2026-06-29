import { Sparkles, Heart, Building2, Check, ArrowRight } from 'lucide-react'

const levels = [
  {
    icon: Sparkles,
    title: 'AI poprvé – bez obav, krok za krokem',
    href: '#zacatecnici',
    text: 'Pro ty, kteří o AI zatím jen slyšeli, ale nevědí, kde začít. I pro ty, kteří už AI zkusili, ale v množství novinek se zatím ztrácejí.',
    points: ['Praktické ukázky', 'Bez technických složitostí', 'Vaším vlastním tempem'],
  },
  {
    icon: Heart,
    title: 'AI vlastním tempem – pro 60+ a seniory',
    href: '#seniori',
    text: 'AI není jen pro mladé. Je to nástroj užitečný každému – bez ohledu na věk nebo předchozí zkušenosti s počítači.',
    points: ['Srozumitelné vysvětlení', 'Bez spěchu', 'Respekt k Vašim zkušenostem'],
  },
  {
    icon: Building2,
    title: 'AI pro práci, procesy a úsporu času',
    href: '#firmy',
    text: 'Pro firmy, týmy i jednotlivce, kteří chtějí zjistit, kde jim AI může reálně pomoci v každodenní práci.',
    points: ['Analýza procesů', 'Konkrétní řešení', 'Měřitelné výsledky'],
  },
]

export function ThreeLevels() {
  return (
    <section id="setkani" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
            Tři úrovně setkání
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            Každý začíná jinde
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Vyberte si možnost, která odpovídá Vašim zkušenostem a potřebám.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <div
              key={level.title}
              className="card-teal flex flex-col rounded-3xl border border-secondary p-7 md:p-8"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <level.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-foreground">
                {level.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{level.text}</p>
              <ul className="mt-5 space-y-2.5">
                {level.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={level.href}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Domluvit setkání
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
