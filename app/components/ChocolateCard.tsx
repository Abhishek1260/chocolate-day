"use client";
import { motion } from "framer-motion";

export default function ChocolateCard({ choco, locked, onClick }: any) {
    return (
        <motion.div
            whileHover={!locked ? { scale: 1.1 } : {}}
            onClick={!locked ? onClick : undefined}
            className={`w-32 h-32 rounded-xl flex flex-col items-center justify-center shadow-lg
      ${locked ? "bg-white/5 opacity-40" : "bg-[#5a2a2a] cursor-pointer"}`}
        >
            <div className="text-4xl">{locked ? "🔒" : choco.emoji}</div>
            <p className="text-xs mt-1 opacity-70">{choco.title}</p>
        </motion.div>
    );
}
