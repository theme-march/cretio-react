const images = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export const getImagePath = (path: string): string => {
  // 1. Direct match or "src/" normalization
  let normalizedPath = path.startsWith('src/') ? `../${path.substring(4)}` : path;
  if (images[normalizedPath]) {
    return (images[normalizedPath] as { default: string }).default;
  }

  // 2. Try prepending the base path if not present
  const withPrefix = `../assets/img/${path}`;
  if (images[withPrefix]) {
    return (images[withPrefix] as { default: string }).default;
  }

  // 3. Last resort: Find first image that ends with the given path (suffix match)
  const keys = Object.keys(images);
  const match = keys.find(key => key.endsWith(`/${path}`) || key.endsWith(path));
  
  if (match) {
    return (images[match] as { default: string }).default;
  }
  
  console.warn(`Image not found: ${path}`);
  return path;
};
