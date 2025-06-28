/**
 * @fileoverview Utility functions for combining class names and styling
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description Combines class names using clsx and tailwind-merge for proper Tailwind CSS class merging
 * @param inputs Array of class values to combine
 * @returns Merged class string with conflicting Tailwind classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}