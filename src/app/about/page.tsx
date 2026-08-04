import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How we work"
        title="Small by design."
        invert
      >
        <p>
          Staying small is not a stage we are passing through — it is the
          operating model.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="End-to-end ownership" invert>
            The person who holds the thesis also writes the code, ships the
            product, and answers the email. No handoffs, no telephone game.
          </GridListItem>
          <GridListItem title="Software first, hardware next" invert>
            Today&apos;s agents live in browsers and apps. The ones we want to
            build next live in the home — starting with systems that help
            families look after aging parents: seeing, reasoning, and acting
            when it matters.
          </GridListItem>
          <GridListItem title="Agents in the loop" invert>
            We run the studio the way we build products: agents do the work
            wherever the work lets them, so one engineer can operate like a
            team.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'ByteWizards is a founder-run AI studio in Singapore, built and operated by Tong Chen.',
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="A studio of one, on purpose.">
        <p>
          ByteWizards is a founder-run AI studio in Singapore, built and
          operated by Tong Chen.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Before founding ByteWizards, Tong architected tracking
            infrastructure at Shopee that held 1M+ QPS at peak with zero
            downtime, and led frontend platform teams. Since then he has taken
            two agent products from zero to launch — xSale and NLUI — and works
            deep in multi-agent systems, agent runtimes, and LLM
            infrastructure, including contributing to Eigent, an open-source
            desktop multi-agent workforce built on CAMEL-AI.
          </p>
          <p>
            The studio exists to test one thesis in production: natural
            language becomes the interface, and agents do the work — in
            software today, and in the home next.
          </p>
        </div>
      </PageIntro>

      <Values />

      <ContactSection />
    </>
  )
}
