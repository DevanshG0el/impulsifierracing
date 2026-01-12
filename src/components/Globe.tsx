export default function Globe() {
  return (
    <div className="absolute right-0 -bottom-32 w-[600px] h-[600px] opacity-20 pointer-events-none z-10 overflow-hidden">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="w-full h-full animate-slow-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main circle */}
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
        
        {/* Latitude lines */}
        <ellipse cx="200" cy="200" rx="180" ry="60" stroke="white" strokeWidth="0.5" />
        <ellipse cx="200" cy="200" rx="180" ry="120" stroke="white" strokeWidth="0.5" />
        <ellipse cx="200" cy="200" rx="180" ry="150" stroke="white" strokeWidth="0.5" />
        
        {/* Longitude lines */}
        <ellipse cx="200" cy="200" rx="60" ry="180" stroke="white" strokeWidth="0.5" />
        <ellipse cx="200" cy="200" rx="120" ry="180" stroke="white" strokeWidth="0.5" />
        <ellipse cx="200" cy="200" rx="150" ry="180" stroke="white" strokeWidth="0.5" />
        
        {/* Rotated ellipses */}
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="90"
          stroke="white"
          strokeWidth="0.5"
          transform="rotate(45 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="180"
          ry="90"
          stroke="white"
          strokeWidth="0.5"
          transform="rotate(-45 200 200)"
        />
        
        {/* Accent circle */}
        <circle cx="200" cy="200" r="185" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>
    </div>
  );
}
