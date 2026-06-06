"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/thaddeuschukss/30min";
const CSS_URL = "https://assets.calendly.com/assets/external/widget.css";
const JS_URL = "https://assets.calendly.com/assets/external/widget.js";

function loadCalendlyAssets() {
  if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_URL;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${JS_URL}"]`)) {
    const script = document.createElement("script");
    script.src = JS_URL;
    script.async = true;
    document.head.appendChild(script);
  }
}

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function CalendlyButton({ className, children }: CalendlyButtonProps) {
  useEffect(() => {
    loadCalendlyAssets();
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Script still loading on first interaction
      setTimeout(() => {
        window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
      }, 600);
    }
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
