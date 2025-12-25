// Common utility helpers

export function formatCurrency(
  value: number,
  locale = "en-IN",
  currency: string = "INR",
) {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value,
  );
}

export function formatDate(
  date: Date | string,
  locale = "en-IN",
  options?: Intl.DateTimeFormatOptions,
) {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    ...(options || {}),
  }).format(d);
}

export function classNames(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function truncate(text: string, max = 30) {
  if (text.length <= max) return text;
  return text.slice(0, Math.max(0, max - 1)) + "…";
}

export function isEmail(str: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
