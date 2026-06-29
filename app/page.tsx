import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ThreeLevels } from '@/components/three-levels'
import { Beginners, Seniors, Companies } from '@/components/programs'
import { Pricing } from '@/components/pricing'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ThreeLevels />
        <Beginners />
        <Seniors />
        <Companies />
        <Pricing />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
