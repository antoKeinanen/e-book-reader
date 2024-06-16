import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncates a given text to a specified length and appends an optional ending.
 *
 * @param text - The text to truncate.
 * @param options - Optional parameters for truncation.
 * @param options.ending - The ending to append to the truncated text. Default is "...".
 * @param options.length - The maximum length of the truncated text. Default is 25.
 * @returns The truncated text.
 */
export function truncate(
  text: string,
  options?: { ending?: string; length?: number },
) {
  let { ending, length } = options ?? {};
  length ??= 25;
  ending ??= "...";

  if (text.length > length) {
    return text.substring(0, length) + ending;
  }
  return text;
}
