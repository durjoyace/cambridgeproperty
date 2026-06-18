/// <reference types="vite/client" />

// vite-imagetools query imports — `as=srcset` returns a srcset string,
// `as=url` returns a single resolved URL.
declare module "*&as=srcset" {
  const src: string;
  export default src;
}
declare module "*&as=url" {
  const src: string;
  export default src;
}
