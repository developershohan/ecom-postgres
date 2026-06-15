import Link from "next/link";

import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const shopLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/deals", label: "Deals" },
  { href: "/new-arrivals", label: "New arrivals" },
  { href: "/best-sellers", label: "Best sellers" },
];

const supportLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="wrapper grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" className="text-lg font-semibold text-foreground">
            {APP_NAME}
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            {APP_DESCRIPTION}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Shop</h2>
          <nav className="mt-3 grid gap-2">
            {shopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Support</h2>
          <nav className="mt-3 grid gap-2">
            {supportLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t">
        <div className="wrapper flex flex-col gap-2 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
