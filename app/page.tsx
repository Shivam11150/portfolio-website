"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WorkPreview from "@/components/WorkPreview";
import SkillsSection from "@/components/skillsection";
import AboutSnap from "@/components/aboutsnap";
import EndingConnect from "@/components/endingconnect";

export default function Home() {

  useEffect(() => {
    fetch("/api/track-visit", {
      method: "POST",
    });
  }, []);

  return (
    <main>
      <Hero />
      {/* <Philosophy /> */}
      <WorkPreview />
      <SkillsSection />
      <AboutSnap />
      <EndingConnect />
    </main>
  );
}
