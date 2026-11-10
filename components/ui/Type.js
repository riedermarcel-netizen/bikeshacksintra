export function Eyebrow({ children, className = "", light = false }) {
  return (
    <p
      className={`font-display text-[14px] md:text-[15px] tracking-[0.36em] uppercase ${
        light ? "text-dim" : "text-earth"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function H2({ children, className = "" }) {
  return (
    <h2
      className={`font-display font-medium uppercase leading-[1.02] text-[40px] md:text-[56px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Body({ children, className = "", light = false }) {
  return (
    <p
      className={`text-[17px] leading-[1.7] max-w-[600px] ${
        light ? "text-mist" : "text-stone"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function ButtonLink({ href, children, variant = "dark", className = "", ...rest }) {
  const styles = {
    dark: "bg-ink text-paper hover:opacity-90",
    light: "bg-paper text-ink hover:bg-sand",
    outline: "border border-paper text-paper hover:bg-paper/10",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-6 py-4 text-[15px] font-semibold transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
