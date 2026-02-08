"use client";
import { useEffect } from "react";

export default function HeartClick() {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const heart = document.createElement("div");
            heart.innerText = "❤️";
            heart.style.position = "fixed";
            heart.style.left = `${e.clientX}px`;
            heart.style.top = `${e.clientY}px`;
            heart.style.pointerEvents = "none";
            heart.style.animation = "floatUp 1s ease-out forwards";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        };
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, []);

    return null;
}
