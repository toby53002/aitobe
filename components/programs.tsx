import { Check, ArrowRight } from 'lucide-react'

function TakeawayList({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="font-heading text-lg font-bold text-foreground">Co si odnesete</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-3.5 text-primary" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Cta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

export function Beginners() {
  return (
    <section id="zacatecnici" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Pro začátečníky a mírně pokročilé
            </p>
            <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Začít a vyzkoušet si něco nového se dá kdykoli.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Toto setkání je pro Vás, pokud máte z AI obavy, nevíte, kde začít, nebo si v ní
                zatím nejste jistí.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  Je i pro ty, kteří už AI zkusili, ale v množství novinek a možností se zatím úplně
                  neorientují.
                </strong>
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Vše si spolu projdeme klidně, srozumitelně a na praktických příkladech.
              </p>
            </div>
            <Cta href="#kontakt" label="Chci začít" />
          </div>
          <div className="card-teal rounded-3xl border border-secondary p-7 md:p-9">
            <TakeawayList
              items={[
                'První klidné a srozumitelné seznámení s AI.',
                'Lepší orientaci v tom, co AI umí a kde může být užitečná.',
                'Jednoduché a praktické příklady ze života i práce.',
                'Tipy, které můžete vyzkoušet hned.',
                'Větší jistotu a menší obavy z toho, jak s AI začít.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Seniors() {
  return (
    <section id="seniori" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="card-teal md:order-2 rounded-3xl border border-secondary p-7 md:p-9">
            <TakeawayList
              items={[
                'Pochopení, co AI je a k čemu ji použít.',
                'Praktické příklady v klidném tempu.',
                'Základní bezpečnost a ochranu soukromí.',
                'Jednoduché shrnutí tipů domů.',
              ]}
            />
          </div>
          <div className="md:order-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Pro 60+ a seniory
            </p>
            <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              AI vlastním tempem, s respektem k Vašim zkušenostem.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  AI není jen pro mladé nebo technicky zdatné.
                </strong>{' '}
                Je to nástroj, který může být užitečný každému – bez ohledu na věk nebo předchozí
                zkušenosti s počítači.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Nebudu Vás zkoušet, porovnávat ani spěchat. Vysvětlím vše srozumitelně, v normální
                řeči.
              </p>
            </div>
            <Cta href="#kontakt" label="Mám zájem" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Companies() {
  return (
    <section id="firmy" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Pro firmy a týmy
            </p>
            <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Nechte AI pomoci tam, kde Vám rutina bere čas.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Opakující se úkoly, zdlouhavé procesy a rutinní práce často berou čas, který by mohl
                být využit smysluplněji.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Společně projdeme Vaše každodenní postupy, najdeme místa, kde se práce zbytečně
                opakuje, a navrhneme konkrétní řešení.
              </p>
            </div>
            <Cta href="#kontakt" label="Chci konzultaci" />
          </div>
          <div className="card-teal rounded-3xl border border-secondary p-7 md:p-9">
            <TakeawayList
              items={[
                'Přehled míst, kde může AI ve firmě skutečně pomoci.',
                'Návrh řešení podle Vašich procesů.',
                'Jasný pohled na bezpečnost a ochranu dat.',
                'Doporučení, čím začít jako první.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
