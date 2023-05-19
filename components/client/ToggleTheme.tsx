"use client"

import { useState } from "react"
import { Button } from "../ui/button";
import { Moon, SunIcon } from 'lucide-react'

export default function ToggleTheme({
  theme
}: {
  theme: 'dark' | 'light'
}) {
  const [theTheme, setTheTheme] = useState<'dark' | 'light'>(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark');
    if (root.classList.contains('dark')) {
      setTheTheme('dark');
      document.cookie = `theme=dark`;
    } else {
      setTheTheme('light');
      document.cookie = `theme=light`;
    }
  }

  return (
    <Button variant="ghost" className="p-2" onClick={toggleTheme}>
      {theTheme === 'dark' ? <SunIcon size={24} /> : <Moon size={24} />}
    </Button>
  )
}