"use client";
import { useState } from "react";
import Intro from "./components/Intro";
import ChocolateGrid from "./components/ChocolateGrid";
import BackgroundMusic from "./components/BackgroundMusic";
import HeartClick from "./components/HearClick";

const HER_NAME = "HERNAME"; // ← change this

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <HeartClick />
      <BackgroundMusic />
      {opened ? <ChocolateGrid />
        : <Intro onOpen={() => setOpened(true)} />}
    </>
  );
}