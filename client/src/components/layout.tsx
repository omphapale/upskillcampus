
import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/80'}`}>
          {children}
        </a>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="hidden font-display font-bold sm:inline-block text-xl tracking-tighter">
                AUTOPARTS <span className="text-primary">PRO</span>
              </span>
            </a>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/catalog">Catalog</NavLink>
            <NavLink href="/admin">Admin</NavLink>
          </nav>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/">
              <a className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Wrench className="h-6 w-6 text-primary" />
                <span className="font-bold">AUTOPARTS PRO</span>
              </a>
            </Link>
            <div className="my-4 pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link href="/"><a onClick={() => setIsMobileMenuOpen(false)}>Home</a></Link>
                <Link href="/catalog"><a onClick={() => setIsMobileMenuOpen(false)}>Catalog</a></Link>
                <Link href="/admin"><a onClick={() => setIsMobileMenuOpen(false)}>Admin</a></Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search parts..."
                className="pl-8 h-9 md:w-[300px] lg:w-[400px] bg-secondary/50 border-border/50 focus-visible:ring-primary"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
             <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <span className="font-bold text-foreground">AutoParts Pro</span>. 
          The source code is available on <a href="#" className="font-medium underline underline-offset-4">GitHub</a>.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
