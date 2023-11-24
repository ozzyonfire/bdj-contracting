import ToggleTheme from "@/components/client/ToggleTheme";
import MobileNav from "@/components/client/mobile-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Header({ theme }: {
	theme: 'dark' | 'light'
}) {
	return (
		<header className="absolute w-full z-50">
			<div className="w-full p-4 lg:p-8">
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
					<div className="block lg:hidden">
						<MobileNav theme={theme} />
					</div>
					<div className='hidden lg:flex justify-center items-center gap-4 h-12'>
						<Link href="#do-best">
							<span className='font-serif text-lg font-semibold hover:border-b-4'>
								What we do
							</span>
						</Link>
						<span>&middot;</span>
						<a href="#services">
							<span className='font-serif text-lg font-semibold hover:border-b-4'>
								Services
							</span>
						</a>
						<span>&middot;</span>
						<a href="#gallery">
							<span className='font-serif text-lg font-semibold hover:border-b-4'>
								Gallery
							</span>
						</a>
						<span>&middot;</span>
						<a href="#contact-us">
							<Button className='font-serif' variant="default" size="nav">Contact Us</Button>
						</a>
						<ToggleTheme theme={theme} />
					</div>
				</div>
			</div>
		</header>
	)
}