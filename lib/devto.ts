// Fetches public articles via dev.to's unauthenticated API. Verified field
// names against dev.to's own TypeScript API client (published_at,
// description, tag_list, cover_image, url, id) rather than guessed.
//
// PLACEHOLDER: swap this for your real dev.to username.
const DEVTO_USERNAME = "abhishekdutta619";

export interface DevToPost {
  id: number;
  title: string;
  url: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
}

export async function getDevToPosts(): Promise<DevToPost[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${DEVTO_USERNAME}`,
      { next: { revalidate: 3600 } } // refresh hourly, no full redeploy needed
    );

    // Fails gracefully -- a down/rate-limited API or an unset username
    // should never break the build or show a broken section, just fewer posts.
    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((a: Record<string, unknown>) => ({
      id: a.id as number,
      title: a.title as string,
      url: a.url as string,
      publishedAt: (a.published_at as string) ?? (a.published_timestamp as string) ?? "",
      excerpt: (a.description as string) ?? "",
      tags: Array.isArray(a.tag_list) ? (a.tag_list as string[]) : [],
    }));
  } catch {
    return [];
  }
}
