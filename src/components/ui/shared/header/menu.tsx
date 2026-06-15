import Link from "next/link";
import { cn } from "@/lib/utils";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/deals", label: "Deals" },
  { href: "/contact", label: "Contact" },
];

interface MenuProps {
  className?: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export const Menu = ({ className, variant = "desktop", onClick }: MenuProps) => {
  if (variant === "desktop") {
    return (
      <nav className={cn("hidden items-center gap-6 md:flex", className)}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className={cn("grid gap-1", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          onClick={onClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
