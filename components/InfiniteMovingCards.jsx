'use client';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function InfiniteMovingCardsDemo() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#080808] border-b-2 border-black dark:border-white transition-colors duration-150" id="publications">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF3B00] mb-2 font-bold">
          // SECTION_04 // ARTICLES_AND_ESSAYS
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 pb-4 border-b-2 border-black dark:border-white">
          <h2 className="font-serif text-5xl sm:text-7xl font-normal text-black dark:text-white leading-tight">
            Publications
          </h2>
          <div className="font-mono text-xs text-black dark:text-[#A3A3A3] uppercase">
            ESSAYS // CASE_ANALYSES
          </div>
        </div>
      </div>

      <div className="w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: 'My First Devcon, But Not the Last',
    name: 'Shaun Lim',
    title: 'A Tale of Two My Experience @ DC7 SEA + ETHGlobal Bangkok',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1732865455309/791b185b-6b9c-45fd-b685-7f3714653f6b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://shaunlim08.hashnode.dev/my-experience-dc7-sea-ethglobal-bangkok',
  },
  {
    quote:
      'This is a transcribed article from a Blockchain Boleh Podcast Session held by APUBCC that discusses about hackathons in general.',
    name: 'Shaun Lim',
    title: 'Blockchain Boleh Series #3:How to kickstart your first Hackathon?',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1688580763028/cfd1a217-a69a-4f88-a620-652927ad9ad2.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://apubcc.hashnode.dev/blockchain-boleh-series-3how-to-kickstart-your-first-hackathon',
  },
  {
    quote: 'A First Glance at Layer 2 Blockchain',
    name: 'Shaun Lim',
    title: "Beginner's Guide to Layer 2 Chains",
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1682087013351/d05c9d6c-ab4a-41f3-94d3-fd0eef9b6a10.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://apubcc.hashnode.dev/beginners-guide-to-layer-2',
  },
  {
    quote: 'The Basics of Game-Fi',
    name: 'Shaun Lim',
    title: 'Game-Fi in a Nutshell',
    image:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1679733233460/0b66135b-92bc-4086-b0bf-daa7d350e9a0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    link: 'https://apubcc.hashnode.dev/game-fi-in-a-nutshell',
  },
  {
    quote:
      'Insights about the AWS outage that happened on 20/10/2025 and relating cloud best practices to the mobile game Clash Royale',
    name: 'Shaun Lim',
    title:
      'The Great Clash Royale Outage: A Post-Battle Analysis (Not about Clash Royale*)',
    image: '/clashroyaleaws.png',
    link: 'https://www.linkedin.com/pulse/great-clash-royale-outage-post-battle-analysis-shaun-lim-r59te/?trackingId=HLrHeqCAS7yyrtZp4SNccQ%3D%3D',
  },
];
