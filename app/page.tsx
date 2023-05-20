import ToggleTheme from '@/components/client/ToggleTheme'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cookies } from 'next/headers';
import Testimonials from '@/components/client/testimonials';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';
import { HammerIcon, HardHatIcon, RulerIcon, Shovel, ShovelIcon } from 'lucide-react';
import { InstagramFeed } from '@/components/instagram-feed';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full p-4 lg:p-12">
        <div className='flex flex-row items-start gap-2 flex-wrap'>
          <div className="relative h-[100px] w-[200px] lg:h-[150px] lg:w-[320px]">
            <Image
              className="dark:invert logo"
              src="/logos/color-no-bg.svg"
              alt="BDJ Contracting"
              fill
            />
          </div>
          <div className='flex-grow'></div>
          <div className='flex justify-center items-center gap-4 h-12'>
            <a href="#do-best">
              <span className='font-serif text-lg font-semibold hover:border-b-4'>
                What we do
              </span>
            </a>
            <Separator orientation='vertical' />
            <a href="#gallery">
              <span className='font-serif text-lg font-semibold hover:border-b-4'>
                Gallery
              </span>
            </a>
            <Separator orientation='vertical' />
            <a href="#services">
              <span className='font-serif text-lg font-semibold hover:border-b-4'>
                Services
              </span>
            </a>
            <Separator orientation='vertical' />
            <Button className='font-serif' variant="default" size="nav">Contact Us</Button>
            <ToggleTheme theme={theme} />
          </div>
        </div>
      </div>
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
        {/* @ts-expect-error Server Component */}
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
      <Section>
        <SectionHeader title="Contact Us" />
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='font-serif text-2xl text-muted-foreground font-semibold text-center'>
            Ready to get started?
          </p>
          <form className='min-w-[320px]'>
            <div className='flex flex-col gap-4'>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" />
              <Textarea placeholder="Message" />
            </div>
          </form>
        </div>
      </Section>
    </main>
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