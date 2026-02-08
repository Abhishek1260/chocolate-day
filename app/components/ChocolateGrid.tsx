"use client";
import { chocolates } from "../data/chocolates";
import ChocolateCard from "./ChocolateCard";
import Modal from "./Modal";
import FinalScreen from "./FinalScreen";
import { useState } from "react";

export default function ChocolateGrid() {
    const [unlocked, setUnlocked] = useState(1);
    const [active, setActive] = useState<any>(null);
    const progress = Math.floor((unlocked / chocolates.length) * 100);

    if (unlocked > chocolates.length) return <FinalScreen />;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#3b1f1f] to-black text-white flex flex-col items-center px-4">
            <div className="w-full max-w-md mt-8">
                <div className="text-xs mb-2 opacity-70">sweetness unlocked</div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                    <div
                        className="bg-pink-400 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
                {chocolates.map((c, i) => (
                    <ChocolateCard
                        key={c.id}
                        choco={c}
                        locked={i + 1 > unlocked}
                        onClick={() => setActive(c)}
                    />
                ))}
            </div>

            {active && (
                <Modal
                    choco={active}
                    onClose={() => setActive(null)}
                    onUnlock={() => {
                        setUnlocked((p) => p + 1);
                        setActive(null);
                    }}
                    isLast={active.id === chocolates.length}
                />
            )}
        </div>
    );
}
