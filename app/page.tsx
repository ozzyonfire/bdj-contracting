import { InstagramFeed } from '@/app/instagram-feed';
import Testimonials from '@/components/client/testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HammerIcon, HardHatIcon, RulerIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { ReactNode } from 'react';
import { submitContactForm } from './actions';
import Header from './header';
import DoBest from './do-best';
import ChooseUs from './choose-us';

export default async function Home() {
  const theme = (cookies().get("theme")?.value as 'dark' | 'light') || 'light';

  const services: string[] = [
    'Renovations',
    'Finishing',
    'Design',
    'Construction',
    'Landscaping',
    'Excavation',
    'Demolition',
    'Bathrooms',
    'Kitchens',
    'Basements',
    'Decks',
    'Fences',
    'Additions',
    'Flooring',
    'Painting',
    'Drywall',
    'Trim',
    'Cabinets',
    'Countertops',
    'Windows',
    'Doors',
    'Stairs',
    'Railings',
    'Siding',
    'Fine Carpentry',
    'Woodworking',
    'Furniture',
    'and more!'
  ];

  const handleFormSubmit = async (formData: FormData) => {
    'use server';
    const response = await submitContactForm(formData);
  }

  return (
    <>
      <Header theme={theme} />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full min-h-screen overflow-hidden grid items-end relative">
          <Image
            className='-z-0'
            src="/images/room.jpg"
            alt="BDJ Contracting"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent via-50% to-primary-foreground opacity-75"></div>

          <div className='container relative z-10 flex gap-4 pb-16 items-end'>
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-5xl font-semibold drop-shadow-md">
                Turning dreams into reality.
              </h2>
              <p className='font-sans text-2xl max-w-screen-md'>
                Get a free quote today. We&apos;ll get back to you within 24 hours. We are committed to providing the highest quality workmanship and customer service. We are fully licensed and insured.
              </p>
            </div>
            <div className='flex-grow'></div>
            <div>
              <Button className='font-serif min-w-48' variant="default" size="lg">Get a Quote</Button>
            </div>
          </div>

          <div className='w-full h-48 absolute'>
            {/* svg from bottom-left to top right to transition background color */}
            <svg
              className='w-full h-full fill-gray-50 dark:fill-gray-950'
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* <polygon points="0,0 100,0 0,100" /> */}
              <polygon points="0,100 100,100, 100,0" />
            </svg>
          </div>
        </div>



        <DoBest theme={theme} />

        <div className='w-full h-48 bg-gray-950'>
          {/* svg from bottom-left to top right to transition background color */}
          <svg
            className='w-full h-full fill-gray-900'
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 100,0 0,100" />
          </svg>
        </div>

        <ChooseUs />

        <p className='font-serif text-4xl text-muted-foreground font-semibold text-center'>
          Bay of Quinte&apos;s most sought-after contractor.
        </p>
        <Section>
          <div className="flex flex-wrap gap-12 items-center">
            <div className="lg:hidden w-full">
              <Testimonials />
            </div>
            <div className='flex-1'>
              <div className='min-h-[300px] max-h-[500px] relative overflow-hidden aspect-square mx-auto flex justify-center shadow-lg border rounded-md'>
                <Image
                  src="/images/hero2.jpg"
                  alt="BDJ Contracting"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-1 flex-col h-full">
              <Testimonials />
            </div>
          </div>
        </Section>
        <Section alt id="do-best">
          <SectionHeader title="What we do best" />
          <div className='flex gap-12 flex-wrap justify-center '>
            <InfoCard
              title="Renovations"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              icon={
                <HammerIcon size={48} />
              }
            />
            <InfoCard
              title="Finishing"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              icon={
                <RulerIcon size={48} />
              }
            />
            <InfoCard
              title="Design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              icon={
                <HardHatIcon size={48} />
              }
            />
          </div>
        </Section>
        <Section id="gallery">
          <SectionHeader title="Gallery" />
          <InstagramFeed />
        </Section>
        <Section alt id="services">
          <SectionHeader title="Services" />
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-24 gap-3 list-disc'>
            {services.map((service) => (
              <li key={service} className='text-2xl font-semibold'>
                {service}
              </li>
            ))}
          </ul>
        </Section>
        <Section id="contact-us">
          <SectionHeader title="Contact Us" />
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='font-serif text-2xl text-muted-foreground font-semibold text-center'>
              Ready to get started?
            </p>
            <form className='min-w-[480px] px-4' action={handleFormSubmit}>
              <div className='flex flex-col gap-1'>
                <Input autoComplete='off' placeholder='First name' type="text" name="first-name" required />
                <Input autoComplete='off' placeholder='Last name' type="text" name="last-name" required />
                <Input autoComplete='off' placeholder="Email" type="email" required name="email" />
                <Input placeholder="Phone" name="phone" />
                <Textarea placeholder="Message" required name="message" />
                <div className="flex justify-end">
                  <Button variant="default" size="lg" type="submit">Send</Button>
                </div>
              </div>
            </form>
          </div>
        </Section>
      </main>
    </>
  )
}


function SectionHeader({
  title
}: {
  title: string
}) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className="font-serif text-4xl font-semibold text-center mb-4">{title}</h2>
      <div className='w-24 border-b-4 border-primary mx-auto mb-8'></div>
    </div>
  )
}

function Section({
  alt,
  children,
  id
}: {
  alt?: boolean
  children: React.ReactNode
  id?: string
}) {
  return (
    <div id={id} className={`w-full ${alt ? 'bg-secondary' : ''}`}>
      <div className='container py-12'>
        {children}
      </div>
    </div>
  )
}

function InfoCard({
  title,
  description,
  icon
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <Card className='shadow-md w-[320px]'>
      <CardHeader>
        <div className="pb-2">
          {icon}
        </div>
        <CardTitle className="font-serif text-2xl">{title}</CardTitle>
        <div className='w-12 border-b-4 border-primary'></div>
        <CardDescription className='pt-4'>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}