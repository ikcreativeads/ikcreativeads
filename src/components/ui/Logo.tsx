import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo-square.jpg"
        alt="IK Creative Ads"
        width={200}
        height={200}
        priority
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
      />
    </div>
  );
}
