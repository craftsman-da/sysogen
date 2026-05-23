"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const STORAGE_KEY = "sysogen_cookie_consent";

interface ConsentState {
  decided: boolean;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function CookieConsent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const existing = loadConsent();
    if (existing?.decided) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function accept(all: boolean) {
    saveConsent({
      decided: true,
      necessary: true,
      analytics: all ? true : analytics,
      marketing: all ? true : marketing,
      preferences: all ? true : preferences,
    });
    setVisible(false);
  }

  function reject() {
    saveConsent({
      decided: true,
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
    setVisible(false);
  }

  function saveCurrent() {
    saveConsent({ decided: true, necessary: true, analytics, marketing, preferences });
    setVisible(false);
  }

  if (!visible) return null;

  const bg = isDark ? "rgba(10,13,22,0.97)" : "#fff";
  const border = isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const textMain = isDark ? "#EEF3FF" : "#0D1F47";
  const textMuted = isDark ? "rgba(190,210,255,0.65)" : "rgba(13,31,71,0.55)";
  const toggleBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(13,31,71,0.06)";
  const toggleBorder = isDark ? "rgba(255,255,255,0.12)" : "rgba(13,31,71,0.15)";

  const Tag = ({ children }: { children: string }) => (
    <span
      style={{
        fontSize: 9,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "var(--font-mono)",
        padding: "2px 6px",
        borderRadius: 4,
        background: isDark ? "rgba(87,130,255,0.13)" : "rgba(13,31,71,0.08)",
        color: isDark ? "rgba(140,170,255,0.9)" : "rgba(13,31,71,0.6)",
        border: `1px solid ${isDark ? "rgba(87,130,255,0.2)" : "rgba(13,31,71,0.12)"}`,
        whiteSpace: "nowrap" as const,
      }}
    >
      {children}
    </span>
  );

  const Toggle = ({
    checked,
    onChange,
    disabled,
    label,
  }: {
    checked: boolean;
    onChange?: (v: boolean) => void;
    disabled?: boolean;
    label: string;
  }) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      style={{
        flexShrink: 0,
        width: 36,
        height: 20,
        borderRadius: 10,
        border: `1px solid ${checked && !disabled ? "transparent" : toggleBorder}`,
        background: checked
          ? disabled
            ? isDark
              ? "rgba(87,130,255,0.35)"
              : "rgba(13,31,71,0.25)"
            : isDark
            ? "#5782FF"
            : "#0D1F47"
          : toggleBg,
        cursor: disabled ? "not-allowed" : "pointer",
        position: "relative",
        transition: "background 0.2s",
        padding: 0,
        opacity: disabled ? 0.7 : 1,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: checked ? 18 : 2,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        }}
      />
    </button>
  );

  const categories = [
    {
      id: "necessary",
      label: "Strictly Necessary",
      description:
        "Required for the site to function. Cannot be disabled. No personal data is shared with third parties.",
      required: true,
      checked: true,
      tag: "Always active",
    },
    {
      id: "preferences",
      label: "Functional / Preferences",
      description:
        "Remembers your settings (e.g. theme, language) to improve your experience.",
      required: false,
      checked: preferences,
      onChange: setPreferences,
    },
    {
      id: "analytics",
      label: "Analytics",
      description:
        "Helps us understand how visitors interact with our site (e.g. page views, bounce rate). Data is anonymised where possible.",
      required: false,
      checked: analytics,
      onChange: setAnalytics,
    },
    {
      id: "marketing",
      label: "Marketing",
      description:
        "Used to deliver relevant advertising and track campaign effectiveness. May involve data sharing with ad networks.",
      required: false,
      checked: marketing,
      onChange: setMarketing,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "min(680px, calc(100vw - 32px))",
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 14,
        boxShadow: isDark
          ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)"
          : "0 24px 60px rgba(0,0,0,0.15)",
        padding: "20px 22px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: textMain }}>
              Cookie Preferences
            </span>
            <Tag>GDPR</Tag>
          </div>
          <p style={{ fontSize: 12.5, color: textMuted, lineHeight: 1.55, margin: 0 }}>
            We use cookies to operate this website and, with your consent, to analyse traffic
            and personalise content. You may accept all, reject non-essential, or manage
            your choices below. Your preference is stored in your browser and can be
            changed at any time.{" "}
            <Link
              href="/privacy"
              style={{ color: isDark ? "#7EB3FF" : "#0D1F47", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Expandable categories */}
      {expanded && (
        <div
          style={{
            borderTop: `1px solid ${border}`,
            borderBottom: `1px solid ${border}`,
            marginBottom: 14,
            paddingTop: 12,
            paddingBottom: 4,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {categories.map((cat) => (
            <div key={cat.id} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 2,
                  }}
                >
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: textMain }}>
                    {cat.label}
                  </span>
                  {cat.required && <Tag>{cat.tag!}</Tag>}
                </div>
                <p style={{ fontSize: 11.5, color: textMuted, margin: 0, lineHeight: 1.5 }}>
                  {cat.description}
                </p>
              </div>
              <Toggle
                label={cat.label}
                checked={cat.checked}
                onChange={cat.onChange}
                disabled={cat.required}
              />
            </div>
          ))}
        </div>
      )}

      {/* Action row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            fontSize: 12,
            color: textMuted,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px 0",
            textDecoration: "underline",
            fontFamily: "inherit",
          }}
        >
          {expanded ? "Hide options" : "Manage preferences"}
        </button>

        <div style={{ display: "flex", gap: 8, marginLeft: "auto", flexWrap: "wrap" }}>
          <button
            onClick={reject}
            style={{
              fontSize: 12.5,
              fontWeight: 500,
              padding: "7px 16px",
              borderRadius: 8,
              border: `1px solid ${border}`,
              background: "transparent",
              color: textMuted,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.15s",
            }}
          >
            Reject all
          </button>

          {expanded && (
            <button
              onClick={saveCurrent}
              style={{
                fontSize: 12.5,
                fontWeight: 500,
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${isDark ? "rgba(87,130,255,0.4)" : "rgba(13,31,71,0.3)"}`,
                background: "transparent",
                color: isDark ? "#7EB3FF" : "#0D1F47",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Save selection
            </button>
          )}

          <button
            onClick={() => accept(true)}
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: 8,
              border: "none",
              background: isDark ? "#5782FF" : "#0D1F47",
              color: "#fff",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
