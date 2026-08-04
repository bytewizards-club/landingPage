import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
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
      title="Environments over prompts."
      className="mt-24 sm:mt-32 lg:mt-40"
    >
      <p>
        Most of the industry is racing to build better agents. We think the
        harder problem is the world those agents work in — what they can see,
        use, and act on. Models keep getting swapped out. Environments are what
        compound. So every product we ship is built environment-first: the
        domain knowledge lives in the world the agent works in, not just its
        prompt.
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
              Marketing API partner.
            </ListItem>
            <ListItem title="NLUI — the interface layer">
              A mobile MCP host where users complete real-world tasks —
              ride-hailing, food delivery — through pure conversation, no
              app-switching. Built on a research collaboration with Tsinghua
              University.
            </ListItem>
            <ListItem title="Eigent — open source">
              Our founder leads the architecture of Eigent, an open-source
              desktop multi-agent workforce built on CAMEL-AI: agent runtime,
              execution environment, and deployment.
            </ListItem>
          </List>
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
            A small AI studio with one big thesis.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            ByteWizards is an independent, founder-run AI studio in Singapore.
            The thesis: natural language becomes the interface, and agents do
            the work. We build agent products end-to-end — and the worlds they
            work in.
          </p>
        </FadeIn>
      </Container>

      <Thesis />

      <WhatWeBuild />

      <ContactSection />
    </>
  )
}
