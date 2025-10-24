"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const promptVariants = [
  {
    id: "precision-meme",
    headline: "Stop Donating To The Algorithm Fountain",
    prompt: `Create an action-oriented Instagram Story in a digital marketing meme style that calls out brands wasting ad spend on blind boosts. Visualize a dramatic meme split: on the left, a chaotic boost button showering coins—captioned "Boosting posts without targeting." On the right, show a confident Valasys Media UAE strategist dialing in data-backed campaigns, with overlay text "Stop the fountain donations — let Valasys Media UAE handle your ads." Keep the color palette bold neon on dark, add share-worthy humor, and end with a swipe-up CTA that teases "Book a UAE ads rescue session today."`
  },
  {
    id: "growth-sling",
    headline: "Upgrade From Hope Marketing",
    prompt: `Design a witty, high-conversion Instagram Story meme that compares tossing coins into a fountain to blindly boosting Instagram posts. Show the left panel with a marketer hopelessly flicking coins labeled "budget" into a glowing fountain titled "Boost Button." The right panel should spotlight Valasys Media UAE engineers orchestrating precise lookalike targeting dashboards, stamped with "Real revenue starts with strategy." Use slick techno gradients, punchy meme typography, and close with a CTA banner: "DM 'VALASYS UAE' to exit the donation cycle."`
  },
  {
    id: "uae-takeover",
    headline: "From Spraying Cash To Owning The Feed",
    prompt: `Generate a viral-ready Instagram Story storyboard in meme format. Frame 1: A marketer dressed as a tourist gleefully throwing money into a Dubai fountain labeled "Boost Post." Frame 2: A Valasys Media UAE strategist interrupts with a confident "Enough donations." Frame 3: Showcase a dashboard bursting with precision targeting overlays, bold text "Campaigns engineered, not gambled." Finish with a swipe-up CTA sticker: "Let Valasys Media UAE hijack your ROAS." Maintain a cinematic neon-glass style with high contrast and playful meme captions.`
  }
];

const chips = ["Meme-ified CTA", "High-Converting", "UAE Market", "Data-Driven Ads", "Storyboarding"];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCopied(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPrompt = useMemo(() => promptVariants[activeIndex], [activeIndex]);

  const shufflePrompt = useCallback(() => {
    setCopied(false);
    setActiveIndex((prev) => {
      const next = Math.floor(Math.random() * promptVariants.length);
      return next === prev ? (next + 1) % promptVariants.length : next;
    });
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(currentPrompt.prompt);
    setCopied(true);
  }, [currentPrompt.prompt]);

  return (
    <main className="gradient-border card">
      <div>
        <span className="tag">Instagram Story Prompt Toolkit</span>
        <h1 className="headline">{currentPrompt.headline}</h1>
        <p className="subhead">
          Craft a swipe-stopping, meme-ready story that persuades brands to ditch blind boosts and
          let Valasys Media UAE engineer their paid social wins.
        </p>
      </div>

      <section className="prompt-box">
        <h3>
          Ready-To-Paste Prompt{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h3>
        <textarea value={currentPrompt.prompt} readOnly aria-label="Instagram story prompt" />
        <div className="prompt-footer">
          <button className="button" onClick={handleCopy}>
            {copied ? "Prompt Copied" : "Copy Prompt"}
          </button>
          <button className="button" onClick={shufflePrompt}>
            Generate Variation
          </button>
          <div className="chips">
            {chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="status">
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Optimized for high-intent ad strategy creators in the UAE
      </div>
    </main>
  );
}
