import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    title: 'Začátečníci a mírně pokročilí',
    price: '1 500',
    unit: 'Kč',
    meta: ['1,5 hodiny', 'Pardubice a okolí nebo dle domluvy'],
    note: 'Pro první seznámení s AI i lepší orientaci v tom, jak ji začít používat.',
    points: [
      'Lepší orientace v možnostech AI',
      'Jak s AI pracovat jistěji',
      'Co AI umí, neumí a kde si dát pozor',
      'Využití v běžném životě i práci',
    ],
    featured: false,
  },
  {
    title: 'Pro 60+ a seniory',
    price: '1 200',
    unit: 'Kč',
    meta: ['1,5 hodiny', 'Pardubice a okolí nebo dle domluvy'],
    note: 'Klidné a srozumitelné vysvětlení AI vlastním tempem, na příkladech z běžného života.',
    points: [
      'Vlastní tempo a dostatek prostoru',
      'Jednoduché vysvětlení bez spěchu',
      'Příklady z běžného života',
      'Trpělivý a lidský přístup',
    ],
    featured: true,
  },
  {
    title: 'Firmy a týmy',
    price: 'dle domluvy',
    unit: '',
    meta: ['úvodní konzultace', 'dle domluvy'],
    note: 'Společně najdeme místa, kde může AI ušetřit čas a zjednodušit práci.',
    points: [
      'Kde může AI opravdu ušetřit čas',
      'Zjednodušení opakované práce',
      'Praktické využití v týmu',
      'Konkrétní postupy pro vaši práci',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="cenik" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
            Ceník
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            Vyberte si setkání
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-foreground/80">
            U firemních konzultací se nejdřív společně podíváme, kde může AI opravdu pomoci.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={cn(
                'relative flex flex-col rounded-3xl bg-card p-7 md:p-8',
                plan.featured
                  ? 'border-2 border-primary shadow-lg shadow-primary/10'
                  : 'border border-border',
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-foreground">{plan.title}</h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                {plan.unit && <span className="text-sm text-muted-foreground">{plan.unit}</span>}
              </p>
              <div className="mt-3 space-y-0.5 text-sm text-muted-foreground">
                {plan.meta.map((m) => (
                  <p key={m}>{m}</p>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-foreground/75">{plan.note}</p>
              <ul className="mt-5 space-y-3">
                {plan.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={cn(
                  'mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors',
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-border text-foreground hover:bg-secondary',
                )}
              >
                Domluvit setkání
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
