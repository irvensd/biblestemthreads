export function getSiteUrl(rawUrl: string | undefined): string | null {
  if (!rawUrl) {
    return null;
  }

  const trimmed = rawUrl.replace(/\/$/, "");

  // Local Next.js dev runs over HTTP, not HTTPS.
  if (
    trimmed.startsWith("https://localhost") ||
    trimmed.startsWith("https://127.0.0.1")
  ) {
    return trimmed.replace("https://", "http://");
  }

  return trimmed;
}
