"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Briefcase, FolderGit2, FileText, Menu, X } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/work", icon: Briefcase, label: "Work" },
  { href: "/projects", icon: FolderGit2, label: "Projects" },
  { href: "/posts", icon: FileText, label: "Posts" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[690px] px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <ul className={`flex-1 items-center justify-center gap-4 md:flex ${isOpen ? 'flex flex-col absolute left-0 right-0 top-full bg-background/80 backdrop-blur-sm p-4' : 'hidden'}`}>
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} isActive={pathname === item.href} />
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

function NavItem({ href, icon: Icon, label, isActive }: { href: string; icon: React.ElementType; label: string; isActive: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors relative ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
      >
        {isActive && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 z-10 bg-primary/10 rounded-full"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </Link>
    </li>
  )
}

