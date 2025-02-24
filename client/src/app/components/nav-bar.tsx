import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import {
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom"

const storeNavLinks = [
  "About",
  "Catalog",
  "Contact",
]
const accountNavLinks = [
  "Login",
  "Register"
]

function LinksDropdownMenu() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-full aspect-square p-0">
          <Menu className="!size-6" />
          <span className="sr-only">Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xl text-center">Car Store 🐱</DropdownMenuLabel>
          {storeNavLinks.map(storeNavLink => (<DropdownMenuItem key={storeNavLink} className="p-0">
            <NavLink to={`/${storeNavLink.toLowerCase()}`} className={({ isActive }: { isActive: boolean }) => [
              isActive ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50" : "",
              "w-full h-full px-2 py-1.5 text-lg text-center rounded-sm underline"
            ].join(" ")}>
              {storeNavLink}
            </NavLink>
          </DropdownMenuItem>))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xl text-center">Account</DropdownMenuLabel>
          {accountNavLinks.map(accountNavLink => (<DropdownMenuItem key={accountNavLink} className="p-0">
            <NavLink to={`/${accountNavLink.toLowerCase()}`} className={({ isActive }: { isActive: boolean }) => [
              isActive ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50" : "",
              "w-full h-full px-2 py-1.5 text-lg text-center rounded-sm underline"
            ].join(" ")}>
              {accountNavLink}
            </NavLink>
          </DropdownMenuItem>))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "bg-white dark:bg-zinc-950 px-8 h-[70px] p-2 text-4xl sm:text-5xl font-bold flex flex-row justify-between items-center w-full fixed top-0 left-0",
        scrolled && "shadow-md bg-zinc-50 dark:bg-zinc-900"
      )}
    >
      <div className="h-full flex w-full justify-between max-w-6xl mx-auto items-center">
        <div>Car Store 🐈</div>
        <div className="h-full flex gap-2">
          <ModeToggle />
          <LinksDropdownMenu />
        </div>
      </div>
    </nav>
  )
}

export { NavBar }