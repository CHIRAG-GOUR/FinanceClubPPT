"use client";

import { useEffect, useRef } from "react";

export default function LivingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Financial lines
    const lines: { y: number; speed: number; opacity: number }[] = [];
    for (let i = 0; i < 8; i++) {
      lines.push({
        y: Math.random() * height,
        speed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.05 + 0.01
      });
    }

    // Candlesticks
    const candles: { x: number; y: number; h: number; wick: number; color: string; speed: number }[] = [];
    for (let i = 0; i < 30; i++) {
      const isUp = Math.random() > 0.5;
      candles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        h: Math.random() * 40 + 10,
        wick: Math.random() * 30 + 10,
        color: isUp ? "rgba(16, 185, 129, 0.15)" : "rgba(220, 38, 38, 0.1)", // Soft Emerald / Red
        speed: Math.random() * 0.2 + 0.1
      });
    }

    let animationFrameId: number;

    const render = () => {
      // Clear with soft off-white
      ctx.fillStyle = "#FAFAFA";
      ctx.fillRect(0, 0, width, height);

      // Trading Grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving Horizontal Lines
      lines.forEach(line => {
        line.y += line.speed;
        if (line.y < 0) line.y = height;
        if (line.y > height) line.y = 0;
        
        ctx.strokeStyle = `rgba(37, 99, 235, ${line.opacity})`; // Soft Blue
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(width, line.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Animated Candlesticks (floating slowly left)
      candles.forEach(candle => {
        candle.x -= candle.speed;
        if (candle.x < -20) candle.x = width + 20;

        ctx.fillStyle = candle.color;
        ctx.strokeStyle = candle.color;
        ctx.lineWidth = 2;

        // Wick
        ctx.beginPath();
        ctx.moveTo(candle.x, candle.y - candle.wick);
        ctx.lineTo(candle.x, candle.y + candle.h + candle.wick);
        ctx.stroke();

        // Body
        ctx.fillRect(candle.x - 6, candle.y, 12, candle.h);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAFA]">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Soft gradients overlay to keep it premium and bright */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue-soft blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-emerald-soft blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-brand-gold-soft blur-[100px] opacity-60" />
      </div>
    </div>
  );
}
