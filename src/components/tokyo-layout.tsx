import { Link } from "@tanstack/react-router";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Tokyo home">
      <svg className="brand-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="11" r="6" fill="currentColor" opacity=".2" />
        <path
          d="M5 15h30M8 19h24M12 19v17M28 19v17M10 27h20M20 8v7M3 15l4-3M37 15l-4-3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span>
        <span className="brand-name">
          TOKYO<span className="text-primary">.</span>
        </span>
        <span className="brand-caption">OLD SOUL. NEW STORIES.</span>
      </span>
    </Link>
  );
}
export function TokyoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-container site-header">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/heritage" className="nav-link">
            Heritage
          </Link>
          <Link to="/hotel-booking" className="nav-link">
            Hotel Booking
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </nav>
        <span className="header-note">
          <MapPin size={14} /> Japan, East Asia
        </span>
      </header>
      <main>{children}</main>
      <footer className="site-container footer">
        <Brand />
        <p>© 2026 Tokyo Explore. A journey through history.</p>
        <Link to="/gallery" className="text-xs text-muted-foreground flex items-center gap-2">
          A different perspective <ArrowUpRight size={13} />
        </Link>
      </footer>
    </>
  );
}
