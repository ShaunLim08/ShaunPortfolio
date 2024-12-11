"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
        Publications
      </h2>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "My First Devcon, But Not the Last",
    name: "Shaun Lim",
    title: "A Tale of Two My Experience @ DC7 SEA + ETHGlobal Bangkok",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1732865455309/791b185b-6b9c-45fd-b685-7f3714653f6b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
    link: "https://shaunlim08.hashnode.dev/my-experience-dc7-sea-ethglobal-bangkok"
  },
  {
    quote:
      "This is a transcribed article from a Blockchain Boleh Podcast Session held by APUBCC that discusses about hackathons in general.",
    name: "Shaun Lim",
    title: "Blockchain Boleh Series #3:How to kickstart your first Hackathon?",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1688580763028/cfd1a217-a69a-4f88-a620-652927ad9ad2.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
    link: "https://apubcc.hashnode.dev/blockchain-boleh-series-3how-to-kickstart-your-first-hackathon"
  },
  {
    quote: "A First Glance at Layer 2 Blockchain",
    name: "Shaun Lim",
    title: "Beginner's Guide to Layer 2 Chains",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1682087013351/d05c9d6c-ab4a-41f3-94d3-fd0eef9b6a10.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
    link: "https://apubcc.hashnode.dev/beginners-guide-to-layer-2"
  },
  {
    quote: "The Basics of Game-Fi",
    name: "Shaun Lim",
    title: "Game-Fi in a Nutshell",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1679733233460/0b66135b-92bc-4086-b0bf-daa7d350e9a0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", // Larger blog cover image
    link: "https://apubcc.hashnode.dev/game-fi-in-a-nutshell"
  }
];