"use client";

import { useEffect, useState } from "react";

export function Character() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed right-0 bottom-0 w-[400px] h-[600px] pointer-events-none">
      <div
        className={`
          relative w-full h-full
          transition-all duration-1000 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }
        `}
      >
        {/* キャラクターのシルエット */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

        {/* キャラクター本体 */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[500px] animate-float">
          {/* マントと体の統合シルエット */}
          <div
            className="absolute top-0 right-10 w-[200px] h-[480px]"
            style={{
              background:
                "linear-gradient(to right, rgba(255,223,0,0.15), rgba(255,223,0,0.25))",
              clipPath:
                'path("M100,0 Q160,40 180,120 L160,480 L40,480 L60,120 Q80,40 100,0")',
            }}
          />

          {/* マントのオーバーレイ */}
          <div
            className="absolute top-0 right-0 w-[220px] h-[500px] animate-wave"
            style={{
              background:
                "linear-gradient(to right, rgba(255,223,0,0.1), rgba(255,223,0,0.2))",
              clipPath:
                'path("M120,0 Q180,40 200,150 L180,500 L60,500 L80,150 Q100,40 120,0")',
            }}
          />

          {/* 頭部と髪の統合シルエット */}
          <div
            className="absolute top-0 right-20 w-32 h-40"
            style={{
              background:
                "linear-gradient(to right, rgba(255,223,0,0.2), rgba(255,223,0,0.3))",
              clipPath:
                'path("M16,0 Q40,0 45,30 L40,60 Q35,80 16,80 Q0,80 5,60 L0,30 Q5,0 16,0")',
            }}
          />

          {/* 球体 */}
          <div className="absolute top-32 right-0 w-24 h-24">
            <div className="relative w-full h-full animate-float">
              {/* 基本の球体 */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-500">
                {/* 幾何学模様 */}
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

                {/* 光沢効果 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 to-transparent" />
                <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white/90 blur-[1px]" />
              </div>

              {/* 外側の光 */}
              <div className="absolute -inset-2 rounded-full bg-yellow-400/20 blur-md animate-pulse-custom" />
            </div>
          </div>
        </div>

        {/* 周囲の光効果 */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/20 blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse delay-300" />
      </div>
    </div>
  );
}
