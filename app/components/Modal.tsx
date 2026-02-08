"use client";
import { motion } from "framer-motion";

import confetti from "canvas-confetti";

const fireConfetti = () => {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        shapes: ["circle"],
        colors: ["#ff6b81", "#ff9ff3", "#ffd1dc"]
    });
};


export default function Modal({ choco, onClose, onUnlock, isLast }: any) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#2a0f0f] rounded-xl p-6 text-center max-w-sm"
            >
                <div className="text-4xl mb-4">{choco.emoji}</div>
                <p className="mb-6">{choco.message}</p>

                {!isLast ? (
                    <motion.button
                        whileTap={{ scale: 1.3 }}
                        onClick={() => {
                            fireConfetti();
                            onUnlock();
                        }}

                        className="text-2xl"
                    >
                        ❤️
                    </motion.button>
                ) : (
                    <button
                        onClick={() => {
                            fireConfetti();
                            onUnlock();
                        }}
                        className="text-sm opacity-80"
                    >
                        continue
                    </button>
                )}
            </motion.div>
        </div>
    );
}
