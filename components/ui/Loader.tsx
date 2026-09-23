import React from "react";

export interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl" | number;
  variant?: "accent" | "monochrome";
  progress?: number;
  showProgress?: boolean;
  label?: string;
  className?: string;
}

const SIZE_MAP: Record<string, number> = {
  sm: 28,
  md: 48,
  lg: 64,
  xl: 80,
};

export default function Loader({
  size = "md",
  variant = "accent",
  progress,
  showProgress = false,
  label,
  className = "",
}: LoaderProps) {
  const pixelSize = typeof size === "number" ? size : (SIZE_MAP[size] ?? 48);
  const variantClass = variant === "monochrome" ? "uiverse-loader-monochrome" : "uiverse-loader-accent";

  return (
    <div
      className={`inline-flex flex-col items-center justify-center gap-4 ${className}`}
      role="status"
      aria-label={label || (progress !== undefined ? `Loading ${Math.round(progress)}%` : "Loading")}
    >
      {/* Outer ambient glow wrapper */}
      <div className="relative flex items-center justify-center p-2">
        {variant === "accent" && (
          <div
            className="absolute inset-0 rounded-full blur-xl bg-violet-600/25 pointer-events-none transition-opacity duration-300"
            style={{ width: pixelSize * 1.5, height: pixelSize * 1.5, margin: "auto" }}
          />
        )}
        <span
          className={`uiverse-loader ${variantClass}`}
          style={
            {
              "--loader-size": `${pixelSize}px`,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Progress & Label Details */}
      {(label || showProgress || progress !== undefined) && (
        <div className="flex flex-col items-center gap-1.5 text-center">
          {label && (
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-zinc-400 font-medium">
              {label}
            </span>
          )}

          {(showProgress || progress !== undefined) && (
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-violet-400 font-semibold tracking-wider">
                {Math.min(100, Math.max(0, Math.round(progress ?? 0)))}%
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
