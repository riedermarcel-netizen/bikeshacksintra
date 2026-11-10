export default function Wordmark({ line = "SINTRA", className = "" }) {
  return (
    <span className={`font-display leading-none ${className}`}>
      <span className="block text-[22px] md:text-[24px] font-medium tracking-[0.18em]">
        BIKE SHACK
      </span>
      {line && (
        <span className="block text-[10px] md:text-[11px] tracking-[0.42em] mt-1 opacity-70">
          {line}
        </span>
      )}
    </span>
  );
}
