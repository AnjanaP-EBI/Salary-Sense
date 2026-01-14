import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (value:number | string) => {
  if (value === null || value === undefined || value === "") return "";
  return Number(value).toLocaleString();
};