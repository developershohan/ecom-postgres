import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [integerPart, decimalPart] = String(num).split(".");
  if (!decimalPart) return num.toFixed(2);
  return `${integerPart}.${decimalPart.padEnd(2, "0")}`;
}