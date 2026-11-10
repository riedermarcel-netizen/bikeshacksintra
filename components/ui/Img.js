import Image from "next/image";

// Fixed-ratio image box. `ratio` is a CSS aspect-ratio string like "4 / 5".
export default function Img({ src, alt, ratio = "3 / 2", position, sizes = "(min-width: 768px) 50vw, 100vw", className = "", priority = false }) {
  return (
    <div className={`relative w-full overflow-hidden bg-sand ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
