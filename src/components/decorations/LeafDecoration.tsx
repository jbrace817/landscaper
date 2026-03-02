"use client";

interface LeafDecorationProps {
  className?: string;
}

export function LeafDecoration({ className }: LeafDecorationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10C60 10 20 40 20 70C20 90 38 110 60 110C82 110 100 90 100 70C100 40 60 10 60 10Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M60 25C60 25 35 50 35 72C35 85 46 98 60 98C74 98 85 85 85 72C85 50 60 25 60 25Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      <line
        x1="60"
        y1="30"
        x2="60"
        y2="100"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
    </svg>
  );
}

// Variant with filled style
export function LeafDecorationFilled({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 5C40 5 10 30 10 55C10 75 23 90 40 90C57 90 70 75 70 55C70 30 40 5 40 5Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M40 15C40 15 20 35 20 55C20 70 28 82 40 82C52 82 60 70 60 55C60 35 40 15 40 15Z"
        fill="currentColor"
        opacity="0.05"
      />
      <line
        x1="40"
        y1="20"
        x2="40"
        y2="85"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
      {/* Veins */}
      <path
        d="M40 35 L28 50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.08"
      />
      <path
        d="M40 35 L52 50"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.08"
      />
      <path
        d="M40 50 L25 65"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.06"
      />
      <path
        d="M40 50 L55 65"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.06"
      />
    </svg>
  );
}

// Small scattered leaves for pattern backgrounds
export function LeafCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf 1 */}
      <g transform="translate(20, 30) rotate(-15)">
        <path
          d="M15 0C15 0 0 15 0 25C0 35 7 42 15 42C23 42 30 35 30 25C30 15 15 0 15 0Z"
          fill="currentColor"
          opacity="0.06"
        />
      </g>
      {/* Leaf 2 */}
      <g transform="translate(140, 50) rotate(25)">
        <path
          d="M12 0C12 0 0 12 0 20C0 28 5 34 12 34C19 34 24 28 24 20C24 12 12 0 12 0Z"
          fill="currentColor"
          opacity="0.05"
        />
      </g>
      {/* Leaf 3 */}
      <g transform="translate(80, 120) rotate(-5)">
        <path
          d="M18 0C18 0 0 18 0 30C0 42 8 50 18 50C28 50 36 42 36 30C36 18 18 0 18 0Z"
          fill="currentColor"
          opacity="0.07"
        />
      </g>
      {/* Leaf 4 */}
      <g transform="translate(160, 140) rotate(40)">
        <path
          d="M10 0C10 0 0 10 0 17C0 24 4 28 10 28C16 28 20 24 20 17C20 10 10 0 10 0Z"
          fill="currentColor"
          opacity="0.04"
        />
      </g>
    </svg>
  );
}
