export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[1280px] mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
