export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-indigo-600 hover:underline",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
