import ToggleTheme from '@/components/client/ToggleTheme'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cookies } from 'next/headers';
import Testimonials from '@/components/client/testimonials';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const theme = (cookies().get("theme")?.value as 'dark' | 'light') || 'light';

  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-12">
      <div className="w-full">
        <div className='flex flex-row items-center gap-2 flex-wrap'>
          <div className="relative h-[100px] w-[200px] lg:h-[150px] lg:w-[320px]">
            <Image
              className="dark:invert logo"
              src="/logos/color-no-bg.svg"
              alt="BDJ Contracting"
              fill
            />
          </div>
          <p className='hidden lg:block font-serif text-xl text-muted-foreground'>
            Bay of Quinte&apos;s most sought-after contractor.
          </p>
          <div className='flex-grow'></div>
          {/* <div className='flex flex-col items-end'>
            <h2 className="font-serif text-2xl font-extrabold tracking-tight lg:text-3xl">BDJ Contracting</h2>
            <h3 className="font-serif text-xl font-extrabold tracking-tight lg:text-2xl">#1 contractor in the Bay of Quinte area.</h3>
          </div> */}

          <Button variant="default" size="nav">Contact Us</Button>
          <ToggleTheme theme={theme} />
        </div>
      </div>
      <p className='mt-6 lg:hidden font-serif text-xl text-muted-foreground'>
        Bay of Quinte&apos;s most sought-after contractor.
      </p>
      <div className="w-full mt-12 flex flex-wrap gap-12 items-center">
        {/* <h1 className="font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">Hello world! BDJ Contracting</h1> */}
        <div className="lg:hidden w-full">
          <Testimonials />
        </div>
        <div className='flex-1'>
          <div className='min-h-[300px] max-h-[500px] relative overflow-hidden aspect-square mx-auto flex justify-center shadow-lg border rounded-md'>
            <Image
              src="/images/hero.jpg"
              alt="BDJ Contracting"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <Testimonials />
        </div>
      </div>
      <div className="container mt-24">
        <div className='flex gap-12'>
          <Card className='flex-1'>
            <CardHeader>
              <CardTitle className='text-center'>Hard working</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='flex-1'>
            <CardHeader>
              <CardTitle className="text-center">High quality</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className='flex-1'>
            <CardHeader>
              <CardTitle className='text-center'>Satisfaction guaranteed</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                With a lot more text to see how it looks.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  )
}
