"use client";

interface PlayButtonProps {
  onClick: () => void;
}

export default function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-4"
      aria-label="Play video"
    >
      {/* Outer ring with pulse animation */}
      <div className="relative pulse-ring">
        <div className="w-20 h-20 rounded-full border-2 border-[var(--accent)]/50 flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center group-hover:bg-[var(--accent)]/30 transition-colors duration-300">
            <svg
              className="w-6 h-6 text-[var(--accent)] ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Label */}
      <div className="flex flex-col items-center text-white/80 group-hover:text-white transition-colors">
        <span className="text-sm font-medium">Play</span>
        <span className="text-xs text-white/50">video</span>
      </div>
    </button>
  );
}
