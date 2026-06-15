"use client";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useState, useEffect } from "react";

const ModeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          aria-label="Toggle theme"
        >
          {theme === "system" ? (
            <SunMoon className="w-5 h-5" aria-hidden="true" />
          ) : theme === "dark" ? (
            <MoonIcon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <SunIcon className="w-5 h-5" aria-hidden="true" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem checked={ theme === 'system' } onClick={() => setTheme("system")}>
          <SunMoon className="w-4 h-4 mr-2" aria-hidden="true" />
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={ theme === 'light' } onClick={() => setTheme("light")}>
          <SunIcon className="w-4 h-4 mr-2" aria-hidden="true" />
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={ theme === 'dark' } onClick={() => setTheme("dark")}>
          <MoonIcon className="w-4 h-4 mr-2" aria-hidden="true" />
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
  );
};

export default ModeToggle;
