import BackgroundBox from "@/components/design/BackgroundBox";
import Image from "next/image";

export default function OurServices() {
	return (
		<section id="do-best" className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b dark:from-gray-950 from-50% dark:to-gray-900 from-gray-50 to-gray-100 relative">
			<BackgroundBox
				className='absolute bottom-0 z-auto'
				fill='fill-white dark:fill-gray-950'
				points="0,100 100,100, 100,0"
			/>
			<div className="container my-12 flex flex-col gap-4 flex-grow h-full">
				<div className="flex flex-col gap-4">
					<h2 className="text-5xl font-serif font-bold text-center">
						Our Services
					</h2>
					<p className="text-xl font-sans dark:text-gray-300 text-gray-800 font-light text-center">
						These are some of the things we do best.
					</p>
				</div>
				<div className="flex-grow flex flex-col justify-center">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 relative">
						<ServiceCard
							title="Basement"
							description="We specialize in basement renovations, from start to finish. We can help you with everything from design and planning to construction and finishing touches."
							image="/images/hero.jpg"
						/>
						<ServiceCard
							title="Bathroom"
							description="We offer a wide range of bathroom renovation services, including tiling, plumbing, electrical work, and more. Our team is committed to delivering high-quality craftsmanship, ensuring that every project is a true reflection of your style and needs."
							image="/images/hero.jpg"
						/>
						<ServiceCard
							title="Kitchen"
							description="We offer a wide range of kitchen renovation services, including tiling, plumbing, electrical work, and more. Our team is committed to delivering high-quality craftsmanship, ensuring that every project is a true reflection of your style and needs."
							image="/images/hero.jpg"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

function ServiceCard({ title, description, image }: {
	title: string;
	description: string;
	image: string;
}) {
	return (
		<div className="flex flex-col gap-0 dark:from-gray-700 dark:to-gray-800 border dark:border-none bg-gradient-to-br rounded-lg shadow-lg">
			<div className="relative w-full h-[250px]">
				<Image
					className="rounded-t-lg"
					src={image}
					alt="BDJ Contracting"
					fill
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="flex flex-col gap-4 p-8">
				<h3 className="text-3xl font-serif font-semibold text-center">
					{title}
				</h3>
				<p className="text-lg font-sans font-light dark:text-gray-300 text-gray-800 text-center">
					{description}
				</p>
			</div>
		</div>
	)
}