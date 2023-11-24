'use client';

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

export default function MobileNav({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <MenuIcon size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(e) => {
        e.preventDefault();
      }}>
        <div className="flex flex-col gap-4">
          <Link href="#do-best">
            <span className='font-serif text-lg font-semibold hover:border-b-4'>
              What we do
            </span>
          </Link>
          <a href="#services">
            <span className='font-serif text-lg font-semibold hover:border-b-4'>
              Services
            </span>
          </a>
          <a href="#gallery">
            <span className='font-serif text-lg font-semibold hover:border-b-4'>
              Gallery
            </span>
          </a>
          <a href="#contact-us">
            <Button className='font-serif' variant="default" size="nav">Contact Us</Button>
          </a>
          {/* <div className='flex justify-center items-center gap-4 h-12'> */}
          <div>
            <ToggleTheme theme={theme} />
          </div>
          {/* </div> */}
        </div>
      </SheetContent>
    </Sheet>
  )
}