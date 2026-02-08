"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function ChocolateCard({ choco, locked, onClick }: any) {
    // Stable random base tilt
    const baseTilt = useMemo(() => {
        return Math.floor(Math.random() * 16) - 8; // -8° to +8°
    }, []);

    // Mouse position motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Map mouse movement to rotation
    const rotateX = useTransform(y, [-50, 50], [10, -10]);
    const rotateY = useTransform(x, [-50, 50], [-10, 10]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX);
        y.set(offsetY);
    }

    function resetTilt() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}

            initial={{ rotate: baseTilt }}

            // Idle micro-wiggle
            animate={
                !locked
                    ? { rotate: [baseTilt - 1, baseTilt + 1] }
                    : { rotate: baseTilt }
            }

            whileHover={
                !locked
                    ? {
                        rotate: 0,
                        scale: 1.1,
                        y: -14,
                        boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
                    }
                    : {}
            }

            transition={{
                rotate: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                },
                type: "spring",
                stiffness: 220,
                damping: 18,
            }}

            onMouseMove={!locked ? handleMouseMove : undefined}
            onMouseLeave={!locked ? resetTilt : undefined}
            onClick={!locked ? onClick : undefined}

            className={`
        w-32 h-32 rounded-xl
        flex flex-col items-center justify-center
        text-center select-none
        ${locked
                    ? "bg-white/5 opacity-40"
                    : "bg-[#5a2a2a] cursor-pointer"
                }
      `}
        >
            {/* Inner content pushed forward for depth */}
            <div style={{ transform: "translateZ(25px)" }}>
                <div className="text-4xl mb-1">
                    {locked ? "🔒" : choco.emoji}
                </div>
                <p className="text-xs opacity-70 px-1">
                    {choco.title}
                </p>
            </div>
        </motion.div>
    );
}
