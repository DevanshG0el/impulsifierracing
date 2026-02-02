import Image from "next/image";

export default function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="Impulsifier Racing Logo"
      width={64}
      height={64}
      className={`${className} rounded-full object-contain`}
      priority
    />
  );
}
