import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const BASE_URL = "https://finfable.com";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
