import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function WorkInquiries() {
  return (
    <FadeIn className="lg:order-last">
      <div className="rounded-3xl border border-neutral-300 p-8 sm:p-12">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          AI consulting, a scoped development project, or a forward-deployed
          engagement to get agents into production — no form to fill in, your
          email lands directly in the founder&apos;s inbox. A few lines about
          what you&apos;re building and where AI fits is plenty.
        </p>
        <Button
          href="mailto:Business@bytewizards.ai?subject=Work%20inquiry"
          className="mt-10"
        >
          Email Business@bytewizards.ai
        </Button>
        <p className="mt-6 text-sm text-neutral-600">
          Prefer to talk?{' '}
          <a
            href="https://cal.com/chentong/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
          >
            Book a call directly&nbsp;&rarr;
          </a>
        </p>
      </div>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Based in Singapore, working with teams everywhere.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['Business', 'Business@bytewizards.ai']].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Say hello">
        <p>One inbox, read by the person who builds the product.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <WorkInquiries />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
