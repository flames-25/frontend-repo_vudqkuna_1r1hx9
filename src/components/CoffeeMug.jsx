import { useEffect, useRef } from 'react'

// Simple CSS 3D coffee mug built with divs, no external 3D deps
export default function CoffeeMug({ size = 260 }) {
  const mugRef = useRef(null)

  useEffect(() => {
    // nothing for now; pure CSS
  }, [])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="mug-scene absolute inset-0" />
      <style>{`
        .mug-scene { perspective: 900px; }
        .mug {
          position: absolute; inset: 0;
          transform-style: preserve-3d;
          animation: gentle 8s ease-in-out infinite alternate;
        }
        @keyframes gentle { from { transform: rotateX(10deg) rotateY(-10deg); } to { transform: rotateX(-5deg) rotateY(15deg); } }
        .mug-body {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          width: 58%; height: 58%; border-radius: 40% 40% 48% 48% / 55% 55% 45% 45%;
          background: radial-gradient(120% 100% at 30% 10%, #ffffff 0%, #f0f0f0 35%, #d9d9d9 100%);
          box-shadow: inset 0 0 30px rgba(0,0,0,0.12), 0 30px 60px rgba(0,0,0,0.15);
        }
        .mug-lip { position: absolute; left: 50%; top: 28%; transform: translateX(-50%);
          width: 62%; height: 6%; border-radius: 50%; background: #eaeaea; box-shadow: inset 0 3px 3px rgba(0,0,0,0.08); }
        .mug-base { position: absolute; left: 50%; bottom: 28%; transform: translateX(-50%);
          width: 40%; height: 6%; border-radius: 50%; background: #cfcfcf; filter: blur(0.3px); }
        .mug-handle { position: absolute; right: 18%; top: 42%; width: 26%; height: 26%; border-radius: 50%; border: 12px solid #e5e5e5; border-left-color: transparent; background: transparent; box-shadow: 6px 4px 8px rgba(0,0,0,0.08) inset; }
        .coffee { position: absolute; left: 50%; top: 33%; transform: translateX(-50%);
          width: 56%; height: 5%; border-radius: 50%; background: radial-gradient(120% 100% at 30% 20%, #8c4a2f, #5a2a16); box-shadow: 0 2px 4px rgba(0,0,0,0.2) inset; }
        .steam { position: absolute; left: 50%; top: 18%; width: 20%; height: 20%; transform: translateX(-50%); filter: blur(8px); opacity: 0.7; }
        .steam:before, .steam:after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9), transparent 60%); border-radius: 50%; animation: steam 4s ease-in-out infinite; }
        .steam:after { animation-delay: 1.2s; }
        @keyframes steam { 0% { transform: translateY(20px) scale(0.8); opacity: 0; } 40% { opacity: 0.9; } 100% { transform: translateY(-30px) scale(1.2); opacity: 0; } }
        .shadow { position: absolute; left: 50%; bottom: 18%; transform: translateX(-50%); width: 46%; height: 8%; border-radius: 50%; background: radial-gradient(closest-side, rgba(0,0,0,0.2), transparent); filter: blur(6px); }
      `}</style>
      <div className="mug">
        <div className="steam" />
        <div className="mug-lip" />
        <div className="coffee" />
        <div className="mug-body" />
        <div className="mug-handle" />
        <div className="mug-base" />
        <div className="shadow" />
      </div>
    </div>
  )
}
