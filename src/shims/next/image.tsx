// src/shims/next/image.tsx
import React from "react";

// Simple shim for Next.js Image component using a plain <img> element.
// Props are passed through unchanged.
export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} />;
}
