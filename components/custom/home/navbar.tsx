"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ListIcon } from "@phosphor-icons/react";
import NavbarSidebar from "./navbar-sidebar";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavBarItemProps {
    title: string;
    href: string;
    isActive?: boolean;
}

const navItems = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
]

function NavBarItem({title, href, isActive}: NavBarItemProps) {
    return (
        <Button asChild variant="outline" className={cn("text-base font-medium bg-white text-black hover:bg-black hover:text-white", isActive && "bg-black text-white")}>
            <Link href={href}>{title}</Link>
        </Button>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 border-b h-16">
      <h1 className={cn("text-4xl font-bold", poppins.className)}>Ecom</h1>
      <NavbarSidebar items={navItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <div className="hidden lg:flex gap-4">
        {navItems.map((item) => (
            <NavBarItem key={item.title} title={item.title} href={item.href} isActive={pathname == item.href}/>
        ))}
      </div>
      <div className="hidden lg:flex items-center h-full">
        <Button className="border-l border-r-0 border-t-0 border-b-0 h-full bg-white text-black hover:bg-ecom-primary hover:text-white transition-all duration-300 cursor-pointer">
            <Link href="/login">Login</Link>
        </Button>
        <Button className="border-l border-r-0 border-t-0 border-b-0 h-full bg-black text-white hover:bg-ecom-primary hover:text-black transition-all duration-300 cursor-pointer">
            <Link href="/register">Start Selling</Link>
        </Button>
      </div>
      <div className="lg:hidden">
        <Button variant="ghost" className="h-full p-2 hover:bg-black hover:text-white cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
            <ListIcon size={24} weight="bold" />
        </Button>
      </div>
    </div>
  );
}