import { isOdd } from "for-the-lulz-is-odd";

export function isEven(n: number): boolean {
  return !isOdd(n);
}
