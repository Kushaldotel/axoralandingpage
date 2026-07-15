export default function Logo({ gradId = "logoGrad" }) {
  return (
    <a href="#top" className="logo" aria-label="Axora home">
      <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke={`url(#${gradId})`} strokeWidth="2.5" />
        <circle cx="16" cy="16" r="4.5" fill="#22D3EE" />
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <span>
        Axora<em>.</em>
      </span>
    </a>
  );
}
