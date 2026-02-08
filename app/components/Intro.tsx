"use client";
import { motion, useMotionValue } from "framer-motion";

export default function Intro({ onOpen }: { onOpen: () => void }) {
    const y = useMotionValue(0);

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#2b0f0f] text-white">
            <p className="mb-6 text-sm opacity-80 text-center">
                this is for you<br />open it slowly 🤍
            </p>

            <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 200 }}
                style={{ y }}
                onDragEnd={(e, info) => {
                    if (info.point.y > 150) onOpen();
                }}
                className="w-48 h-64 bg-[#5a2a2a] rounded-xl flex items-center justify-center text-5xl cursor-pointer shadow-xl"
            >
                🍫
            </motion.div>
        </div>
    );
}
