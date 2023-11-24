import BackgroundBox from "@/components/design/BackgroundBox";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Ruler, Scale3d, Timer } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function ChooseUs() {
	return (
		<section className="w-full min-h-screen bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 relative from-gray-50 to-gray-100">
			<BackgroundBox
				className='absolute bottom-0 -z-0'
				fill='fill-gray-50 dark:fill-gray-950'
				points="0,0 0,100, 100,100"
			/>
			<div className="container my-24 flex flex-col gap-4 h-full flex-grow">
				<div className="flex flex-wrap w-full">
					<div className="w-1/3">
						<div className="flex flex-col gap-12">
							<h2 className="text-5xl font-serif font-bold">
								Why choose us?
							</h2>
							<div className="">
								<Button className='font-serif min-w-48' variant="default" size="lg">View our work</Button>
							</div>
						</div>
					</div>
					<div className="w-2/3">
						<div className="grid grid-cols-2 gap-8">
							<ChooseUsCard
								title="Expertise"
								description="With years of experience in the industry, our team brings a wealth of expertise to every project. We understand the intricacies of basement, bathroom, and kitchen renovations, and we use this knowledge to deliver outstanding results."
								icon={<Scale3d className="w-full h-full" />}
							/>
							<ChooseUsCard
								title="Quality Craftsmanship"
								description="We take pride in our commitment to quality craftsmanship. From the initial concept to the final touches, our skilled craftsmen work diligently to bring your vision to life, creating spaces that are not only beautiful but also functional."
								icon={<Ruler className="w-full h-full" />}
							/>
							<ChooseUsCard
								title="Personalized Approach"
								description="We believe that every client is unique, and so is every project. Our personalized approach ensures that we tailor our services to meet your specific needs and preferences. Your satisfaction is our priority."
								icon={<HeartHandshake className="w-full h-full" />}
							/>
							<ChooseUsCard
								title="Timely Delivery"
								description="We understand the importance of timelines in any renovation project. Our efficient and organized approach allows us to deliver projects on time without compromising on quality."
								icon={<Timer className="w-full h-full" />}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function ChooseUsCard({ title, description, icon }: {
	title: string;
	description: string;
	icon: ReactNode;
}) {
	return (
		<div className="flex flex-col gap-4">
			<div className="rounded-xl bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 from-gray-200 to-gray-300 w-12 h-12 p-2">
				{icon}
			</div>
			<h3 className="text-3xl font-serif font-semibold">
				{title}
			</h3>
			<p className="text-lg font-light font-sans dark:text-gray-300 text-gray-800">
				{description}
			</p>
		</div >
	)
}