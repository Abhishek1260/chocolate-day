"use client";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current?.play().catch(() => { });
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="/music.mp3" type="audio/mpeg" />
        </audio>
    );
}
