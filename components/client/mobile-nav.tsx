'use client';

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function MobileNav() {
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
          <a href="#do-best">
            <span className='font-serif text-lg font-semibold hover:border-b-4'>
              What we do
            </span>
          </a>
          <a href="#gallery">
            <span className='font-serif text-lg font-semibold hover:border-b-4'>
              Gallery
            </span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}