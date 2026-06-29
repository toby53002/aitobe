import Image from 'next/image'

export function About() {
  return (
    <section id="o-mne" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              O mně
            </p>
            <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              ...a mé cestě s AI
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/petra.jpg"
                alt="Petra Vostřelová"
                width={646}
                height={452}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Vysvětluji AI klidně, lidsky a bez tlaku na výkon. U kávy, čaje nebo tam, kde se budete
              cítit příjemně.
            </p>
          </div>

          <div className="max-w-[680px] space-y-5 text-left">
            <p className="leading-relaxed text-muted-foreground">
              Jmenuji se Petra a k umělé inteligenci jsem nepřišla jako technik, ale jako člověk,
              který z ní měl zpočátku respekt. Možná právě proto dnes dobře rozumím lidem, kteří
              nevědí, kde začít, bojí se, že tomu nebudou rozumět, nebo mají pocit, že AI je „jen pro
              někoho jiného“.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Od začátku roku 2023 používám AI téměř každý den. Postupně jsem zjistila, že když se
              vysvětlí lidsky, jednoduše a na konkrétních příkladech, může ušetřit spoustu času,
              nervů i zbytečné rutinní práce. Zároveň ale vím, že ne všude se AI hodí – a že někdy je
              správné říct: tady ji raději nepoužívejme.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Své zkušenosti jsem získala nejen při vlastním používání AI, ale také tím, že ji
              postupně vysvětluji lidem kolem sebe – v práci, mezi kolegy, známými i přáteli. Byla
              jsem u prvních kroků interní pracovní skupiny pro AI a ukazovala lidem, kde může být
              užitečná a kde je naopak potřeba používat zdravý rozum.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Dnes pracuji s lidmi, menšími týmy, firmami i úřady, kteří chtějí zjistit, kde jim AI
              může opravdu ulevit. Nechci vás zahltit technologiemi ani odbornými zkratkami. Mým
              cílem je ukázat vám takové nástroje a postupy, které dávají smysl právě pro vás.
            </p>
            <p className="-ml-5 border-l-4 border-primary pl-4 font-heading text-xl font-bold text-foreground">
              V klidu, srozumitelně a krok za krokem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
