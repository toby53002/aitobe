import Image from 'next/image'
import { Coffee, UserRound, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="uvod"
      className="relative scroll-mt-24 bg-gradient-to-b from-background via-card to-accent/50"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div>
            <h1 className="text-balance font-heading text-2xl font-semibold leading-[1.25] text-primary sm:text-3xl md:text-[2rem]">
              Pojďme spolu najít situace, kdy Vám AI může pomoci v pracovním i běžném životě.
            </h1>

            <div className="mt-6 max-w-xl space-y-4">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Pojďme se potkat u kávy nebo čaje a v klidu si popovídat o umělé inteligenci. Bez
                stresu, bez složitých pojmů, bez tlaku na výkon.{' '}
                <strong className="font-semibold text-foreground">
                  Setkáme se v kavárně, kanceláři nebo jiném místě, kde se budete cítit pohodlně
                </strong>{' '}
                – a všechno si ukážeme{' '}
                <strong className="font-semibold text-foreground">krok za krokem</strong> přímo na
                obrazovce, v tempu, které vám bude příjemné.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Společně pak hledáme,{' '}
                <strong className="font-semibold text-foreground">
                  kde Vám AI může v práci nebo v běžném životě skutečně pomoct
                </strong>{' '}
                – i tam, kde Vás to třeba ještě nenapadlo. Žádné hloupé otázky u mě neexistují.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-full border border-primary bg-card px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Domluvit setkání
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Coffee className="size-4 text-primary" aria-hidden="true" />
                U kávy nebo čaje
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="size-4 text-primary" aria-hidden="true" />
                Individuální přístup
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                Vaším tempem
              </span>
            </div>
          </div>

          {/* Photo column */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_24px_70px_-25px_rgb(79_111_74/0.4)]">
            <Image
              src="/images/uvod.jpeg"
              alt="Klidné setkání u kávy a rozhovor o AI"
              width={1280}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
