"use client";

import { useEffect, useState } from "react";

export function Orbs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 右上の大きな球体 */}
      <div
        className={`
          absolute top-[-50px] right-[-50px] w-[300px] h-[300px]
          transition-all duration-1000 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }
        `}
      >
        <div className="relative w-full h-full animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-500">
            <div
              className="absolute inset-0 rounded-full mix-blend-overlay"
              style={{
                background: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 5px,
                    rgba(255,255,255,0.1) 5px,
                    rgba(255,255,255,0.1) 10px
                  )
                `,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent" />
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 blur-[2px]" />
          </div>
          <div className="absolute -inset-4 rounded-full bg-yellow-400/20 blur-md animate-pulse-slow" />
        </div>
      </div>

      {/* 左下の中サイズ球体 */}
      <div
        className={`
          absolute bottom-[100px] left-[-30px] w-[200px] h-[200px]
          transition-all duration-1000 ease-out delay-300
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }
        `}
      >
        <div className="relative w-full h-full animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-500">
            <div
              className="absolute inset-0 rounded-full mix-blend-overlay"
              style={{
                background: `
                  repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 5px,
                    rgba(255,255,255,0.1) 5px,
                    rgba(255,255,255,0.1) 10px
                  )
                `,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent" />
            <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white/90 blur-[1px]" />
          </div>
          <div className="absolute -inset-3 rounded-full bg-yellow-400/20 blur-md animate-pulse" />
        </div>
      </div>

      {/* 右下の小さな球体 */}
      <div
        className={`
          absolute bottom-[50px] right-[100px] w-[120px] h-[120px]
          transition-all duration-1000 ease-out delay-500
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }
        `}
      >
        <div className="relative w-full h-full animate-float-fast">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-500">
            <div
              className="absolute inset-0 rounded-full mix-blend-overlay"
              style={{
                background: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 3px,
                    rgba(255,255,255,0.1) 3px,
                    rgba(255,255,255,0.1) 6px
                  )
                `,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent" />
            <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/90 blur-[1px]" />
          </div>
          <div className="absolute -inset-2 rounded-full bg-yellow-400/20 blur-md animate-pulse-fast" />
        </div>
      </div>

      {/* 背景の光効果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/20 blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse delay-300" />
      </div>
    </div>
  );
}
