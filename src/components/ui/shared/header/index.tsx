"use client";

import { Menu as MenuIcon, Search, ShoppingCart, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";
import { Menu } from "./menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="wrapper flex h-16 items-center justify-between gap-4 py-0">
        <Link href="/" className="flex min-w-fit items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            width={36}
            height={36}
            className="size-9 rounded-md"
            priority
          />
          <span className="hidden text-base font-semibold tracking-normal text-foreground sm:inline">
            {APP_NAME}
          </span>
        </Link>

        <Menu variant="desktop" />

        <form className="hidden w-full max-w-sm items-center rounded-md border bg-background px-3 lg:flex">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <label htmlFor="site-search" className="sr-only">
            Search products
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search products"
            className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </form>

        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="hidden md:inline-flex lg:hidden"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search aria-hidden="true" />
          </Button>

          <ModeToggle/>

          <Button
            type="button"

            size="icon-lg"
            className="hidden sm:inline-flex"
            aria-label="Account"
          >
            <UserRound aria-hidden="true" />
          </Button>
          <Button
            type="button"

            size="icon-lg"
            className="relative"
            aria-label="Cart"
          >
            <ShoppingCart aria-hidden="true" />
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold leading-none text-primary-foreground">
              0
            </span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label="Open menu"
              >
                <MenuIcon aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{APP_NAME}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <form className="flex items-center rounded-md border bg-background px-3">
                  <Search
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <label htmlFor="mobile-site-search" className="sr-only">
                    Search products
                  </label>
                  <input
                    id="mobile-site-search"
                    type="search"
                    placeholder="Search products"
                    className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
                  />
                </form>

                <Menu variant="mobile" />

                <Button type="button" variant="outline" className="w-full justify-start">
                  <UserRound aria-hidden="true" />
                  Account
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 pt-20 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="relative w-full max-w-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl border bg-background p-4 shadow-lg">
              <form className="flex items-center gap-3 border-b pb-3">
                <Search className="size-5 text-muted-foreground" />
                <label htmlFor="popup-site-search" className="sr-only">
                  Search products
                </label>
                <input
                  id="popup-site-search"
                  type="search"
                  placeholder="Search products..."
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X className="size-4" />
                </Button>
              </form>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Search for products, brands and more</span>
                <span>Press ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
