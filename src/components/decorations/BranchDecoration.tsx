"use client";

interface BranchDecorationProps {
  className?: string;
}

export function BranchDecoration({ className }: BranchDecorationProps) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 30C30 30 50 15 80 15C110 15 130 45 160 45C180 45 200 30 200 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
      <circle cx="40" cy="22" r="4" fill="currentColor" opacity="0.15" />
      <circle cx="80" cy="15" r="3" fill="currentColor" opacity="0.1" />
      <circle cx="120" cy="35" r="5" fill="currentColor" opacity="0.12" />
      <circle cx="160" cy="45" r="3" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

// Vertical branch variant
export function BranchDecorationVertical({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0C30 30 15 50 15 80C15 110 45 130 45 160C45 180 30 200 30 200"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
      />
      {/* Small leaves along branch */}
      <ellipse
        cx="22"
        cy="40"
        rx="8"
        ry="5"
        fill="currentColor"
        opacity="0.08"
        transform="rotate(-30, 22, 40)"
      />
      <ellipse
        cx="38"
        cy="90"
        rx="10"
        ry="6"
        fill="currentColor"
        opacity="0.1"
        transform="rotate(25, 38, 90)"
      />
      <ellipse
        cx="20"
        cy="140"
        rx="7"
        ry="4"
        fill="currentColor"
        opacity="0.06"
        transform="rotate(-20, 20, 140)"
      />
    </svg>
  );
}

// Decorative corner flourish
export function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 110 Q10 60 40 40 Q70 20 110 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
      />
      <path
        d="M20 110 Q20 70 45 50 Q70 30 110 20"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.1"
      />
      {/* Small berries/dots */}
      <circle cx="55" cy="35" r="3" fill="currentColor" opacity="0.12" />
      <circle cx="75" cy="28" r="2" fill="currentColor" opacity="0.08" />
      <circle cx="35" cy="55" r="2.5" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

// Horizontal divider with organic feel
export function OrganicDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 15 Q50 5 100 15 T200 15 T300 15 T400 15"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      <circle cx="100" cy="15" r="3" fill="currentColor" opacity="0.15" />
      <circle cx="200" cy="15" r="4" fill="currentColor" opacity="0.2" />
      <circle cx="300" cy="15" r="3" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
