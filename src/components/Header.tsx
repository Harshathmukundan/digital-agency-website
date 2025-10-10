"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">Grow</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                    "text-sm font-medium transition-all hover:text-purple-600 dark:hover:text-purple-400 relative group",
                    (pathname === href || (href === "/#services" && pathname === "/")) 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-foreground/70"
                )}
              >
                {label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-500 transition-all",
                  (pathname === href || (href === "/#services" && pathname === "/"))
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                 <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">Grow</span>
                  </Link>
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                 </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;