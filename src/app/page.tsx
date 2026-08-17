import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { GridList, GridListItem } from '@/components/GridList'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

function Thesis() {
  return (
    <SectionIntro
      eyebrow="The thesis"
      title="Software first, hardware next."
      className="mt-24 sm:mt-32 lg:mt-40"
    >
      <p>
        Natural language is becoming the interface for everything, and agents
        are doing more and more of the work. That rebuild starts in software —
        but it won&apos;t end there. The products we most want to build next
        live in the physical world: home agent systems that help families look
        after the people they love, where an agent doesn&apos;t just send an
        alert — it understands what it sees and handles what happens next.
      </p>
    </SectionIntro>
  )
}

function WhatWeBuild() {
  return (
    <>
      <SectionIntro
        eyebrow="What we build"
        title="Agent products, shipped end-to-end."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From agent pipelines and LLM infrastructure to the mobile clients and
          backends around them — designed, built, and operated under one roof.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="xSale — domain agents for a vertical">
              A multi-agent system running cross-border influencer marketing
              end-to-end: AI-driven creator discovery and matching, automated
              outreach, and content generation on TikTok. Approved TikTok
              Marketing API partner.{' '}
              <a
                href="https://www.xsale.sale"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
              >
                xsale.sale&nbsp;&rarr;
              </a>
            </ListItem>
            <ListItem title="NLUI — the interface layer">
              A mobile MCP host where users complete real-world tasks —
              ride-hailing, food delivery — through pure conversation, no
              app-switching. Built on a research collaboration with Tsinghua
              University.
            </ListItem>
            <ListItem title="Next — agents for the home">
              Where we&apos;re headed: consumer hardware for the home, starting
              with elder care — agents that notice a fall, a missed routine, or
              an unusually quiet day, understand what they&apos;re seeing, and
              act on it. Early days, by design.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Consulting() {
  return (
    <>
      <SectionIntro
        eyebrow="Consulting"
        title="Hands-on help getting AI into production."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Alongside our own products, we take on a small number of consulting
          engagements and tightly scoped development projects — working
          hands-on with your team, in your environment, to get AI doing real
          work.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList className="lg:!grid-cols-2">
          <GridListItem title="AI adoption, end to end">
            From finding the workflows worth automating to shipping them:
            use-case selection, build-vs-buy, and a clear path to production.
          </GridListItem>
          <GridListItem title="Agent systems that hold up">
            Architecture and reliability for agent products: runtimes,
            multi-agent coordination, MCP tool integration, evals, and LLM
            infrastructure.
          </GridListItem>
          <GridListItem title="Forward-deployed, by design">
            We work inside your environment and your tools — and leave your
            team able to run and evolve what we build together.
          </GridListItem>
          <GridListItem title="Small projects, taken whole">
            An MVP, an internal tool, an agent feature — scoped builds
            delivered end-to-end, from first call to production, by the same
            person you talked to.
          </GridListItem>
        </GridList>
        <div className="mt-12">
          <Button
            href="https://cal.com/chentong/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an intro call
          </Button>
          <p className="mt-4 max-w-xl text-sm text-neutral-600">
            Bookings require a short intro — who you are and what you&apos;d
            like to cover. Requests without context are declined, so a couple
            of clear sentences is all it takes.
          </p>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'ByteWizards is an independent, founder-run AI studio in Singapore. Natural language becomes the interface, and agents do the work.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            A small AI studio in Singapore.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            ByteWizards is independent and founder-run. We believe natural
            language is becoming the interface, and agents are doing more of
            the work — software first, hardware next. We build agent products
            end-to-end.
          </p>
        </FadeIn>
      </Container>

      <Thesis />

      <WhatWeBuild />

      <Consulting />

      <ContactSection />
    </>
  )
}
