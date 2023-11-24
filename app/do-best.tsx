import BackgroundBox from "@/components/design/BackgroundBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DoBest({ theme }: { theme: 'dark' | 'light' }) {
	return (
		<section id="do-best" className="w-full flex flex-col min-h-screen bg-gradient-to-b from-white from-50% to-gray-100 relative dark:from-gray-950 dark:to-gray-900">
			<BackgroundBox
				className='absolute bottom-0 -z-0'
				fill='fill-gray-50 dark:fill-gray-950'
				points="0,100 100,100, 100,0"
			/>
			<div className="container my-24 flex flex-col gap-4 h-full flex-grow">
				<h2 className="text-6xl font-serif font-bold">
					We are dedicated to transforming your living spaces into the home of your dreams.
				</h2>
				<div className="grid grid-cols-2 mt-8 gap-4 flex-grow">
					<div className="flex flex-col gap-8">
						<p className="text-xl font-sans font-light">
							With a focus on excellence and attention to detail, we specialize in providing top-notch renovation services for basements, bathrooms, kitchens, and more. Our team of skilled contractors is committed to delivering high-quality craftsmanship, ensuring that every project is a true reflection of your style and needs.
						</p>
						<div>
							<Button className='font-serif min-w-48' variant="default" size="lg">Get a Quote</Button>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="relative w-full">
							<Image
								className="rounded-md"
								src="/images/hero.jpg"
								alt="BDJ Contracting"
								fill
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
						<div className="relative w-full">
							<Image
								className="rounded-md"
								src="/images/hero2.jpg"
								alt="BDJ Contracting"
								fill
								objectFit="cover"
								objectPosition="center"
							/>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}