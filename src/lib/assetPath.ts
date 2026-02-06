export function assetPath(p: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  const path = p.startsWith("/") ? p : `/${p}`;
  return `${base}${path}`;
}
