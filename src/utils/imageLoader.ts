const images = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export const getImagePath = (path: string): string => {
  let normalizedPath = path.startsWith('src/') ? `../${path.substring(4)}` : path;
  if (images[normalizedPath]) {
    return (images[normalizedPath] as { default: string }).default;
  }

  const withPrefix = `../assets/img/${path}`;
  if (images[withPrefix]) {
    return (images[withPrefix] as { default: string }).default;
  }

  const keys = Object.keys(images);
  const match = keys.find(key => key.endsWith(`/${path}`) || key.endsWith(path));
  
  if (match) {
    return (images[match] as { default: string }).default;
  }
  return path;
};
