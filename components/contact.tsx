import { Mail, MapPin, User, FileText } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

const steps = [
  { num: '1.', text: 'Napíšete mi, s čím potřebujete pomoci.' },
  { num: '2.', text: 'Ozvu se vám zpět a domluvíme vhodný termín i místo.' },
  { num: '3.', text: 'Na setkání vše projdeme klidně a krok za krokem.' },
]

const details = [
  { icon: User, label: 'Petra Vostřelová' },
  { icon: FileText, label: 'IČO: 74655272' },
  { icon: MapPin, label: 'Štefánikova 639, 530 02 Pardubice' },
  { icon: Mail, label: 'petra@aitobe.cz', href: 'mailto:petra@aitobe.cz' },
]

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
            Kontakt
          </p>
          <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight md:text-4xl">
            Domluvme si AI setkání.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            Máte dotaz nebo chcete zjistit, jestli je konzultace pro vás vhodná? Napište mi přes
            formulář pár slov k tomu, s čím potřebujete pomoci. Ozvu se vám nejpozději do 2
            pracovních dnů.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-7 text-card-foreground">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Jak to probíhá
              </h3>
              <ul className="mt-5 space-y-4">
                {steps.map((step) => (
                  <li key={step.num} className="flex gap-3">
                    <span className="font-heading text-lg font-bold text-primary">{step.num}</span>
                    <span className="leading-relaxed text-foreground">{step.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-7 text-card-foreground">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Kontaktní údaje
              </h3>
              <ul className="mt-5 space-y-3">
                {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-3 text-foreground">
                    <d.icon className="size-4 shrink-0 text-primary" aria-hidden />
                    {d.href ? (
                      <a href={d.href} className="underline-offset-4 hover:underline">
                        {d.label}
                      </a>
                    ) : (
                      <span>{d.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-7 text-card-foreground md:p-9">
            <h3 className="font-heading text-2xl font-extrabold text-foreground">Napište mi pár slov.</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Do formuláře prosím uveďte jméno, telefon, e-mail a krátkou poznámku. Díky tomu budu
              vědět, s čím se na mě obracíte.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
