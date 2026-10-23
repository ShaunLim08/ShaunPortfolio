'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

const projectData = [
  {
    id: 19,
    index: '01',
    title: 'TenorFi',
    description:
      'This project is for ETHGlobal NYC 2026. It is a On-Chain Fixed Funding Rate dApp for Perpetual Markets on Hyperliquid',
    image: 'projects/tenorfi.png',
    gitUrl: 'https://github.com/0xYudhishthra/TenorFi',
    featured: true,
  },
  {
    id: 18,
    index: '02',
    title: 'MedPal',
    description:
      'This project is for Great Malaysia AI Hackathon 2025. It is an AI-powered healthcare assistant that provides users with personalized health advice, symptom checking, and appointment scheduling.',
    image: 'projects/medpal.png',
    gitUrl: 'https://github.com/TeeHaoBin/MedPal-Great-Malaysia-AI-Hackathon',
    featured: true,
  },
  {
    id: 17,
    index: '03',
    title: 'NoorooFi',
    description:
      'This project is for Devmatch Hackathon 2025. The Graph is the backbone of this project by allowing us to index and query blockchain data from prediction markets for insights.',
    image: 'projects/nooroofi.png',
    gitUrl: 'https://github.com/ShaunLim08/nooroofi-devmatch',
    featured: true,
  },
  {
    id: 16,
    index: '04',
    title: 'Dumplings',
    description:
      'This project is for Solana Breakout Hackathon 2025. It is an AI Agent as a Service that allows users to create their own Web3 AI agents and easily allow them to easily integrate into their applications.',
    image: 'projects/dumplings.jpg',
    gitUrl: 'https://github.com/Laikaiyong/Dumpling',
    featured: true,
  },
  {
    id: 15,
    index: '05',
    title: 'DoxxScan.sol',
    description:
      'This project is for REDACTED Hackathon 2025. It is a tool that allows users to utilize different on-chain tools to find out information about a wallet address.',
    image: 'projects/doxxscan.jpg',
    gitUrl: 'https://github.com/Laikaiyong/DoxxScan.Sol',
    featured: true,
  },
  {
    id: 14,
    index: '06',
    title: 'Frenz.fi',
    description:
      "This is my team's project for ETH Global Taipei 2025. We have developed a Social Currency Launchpad with AI features integrated utilizing Uniswap, Celo and Nodit.",
    image: 'projects/frenzfi.jpg',
    gitUrl: 'https://github.com/Laikaiyong/Frenz.Fi',
    featured: true,
  },
  {
    id: 13,
    index: '07',
    title: 'CoinMaster',
    description:
      "This is my team's project for BNB Hack 2024 Q4. We have developed an AI Agentic Trading Bot while utilizing various APIs such as CoinGecko API to have real-time insights while trading.",
    image: 'projects/coinmaster.png',
    gitUrl: 'https://github.com/Laikaiyong/CoinMaster',
    featured: false,
  },
  {
    id: 12,
    index: '08',
    title: 'SETTLE',
    description:
      "This is my team's project for Setel Hackathon 2024. We have implemented AI routes, various types of predictions and highlighting icons within our platform.",
    image: 'projects/settle.png',
    gitUrl: 'https://github.com/Laikaiyong/SETTLE',
    featured: false,
  },
  {
    id: 11,
    index: '09',
    title: 'Butter',
    description:
      "This is my team's project for ETH Global Bangkok 2024. Where we optimize side events for people using AI and we make the event experience buttery smooth.",
    image: 'projects/Butter.png',
    gitUrl: 'https://github.com/ShaunLim08/Vitalik-Butterin',
    featured: false,
  },
  {
    id: 10,
    index: '10',
    title: 'MrBeans',
    description:
      "This is my team's project for MCMC Datathon 2024. Mr Beans as a SME that optimizes on courier services specifically on delivering coffee beans using AI/ML.",
    image: 'projects/mrbeans.png',
    gitUrl: 'https://github.com/laikaiyong/mr-beans',
    featured: false,
  },
  {
    id: 9,
    index: '11',
    title: 'SHIFT',
    description:
      "This is my team's project for ETHKL2024 Hackathon. It is a community platform to make sure multiple events don't clash while implementing quadratic funding on the side",
    image: 'projects/shift.jpg',
    gitUrl: 'https://github.com/Laikaiyong/SHIFT',
    featured: false,
  },
  {
    id: 8,
    index: '12',
    title: 'blink.fund',
    description:
      "This is my team's submission for APUBCC Buildstation Ideathon 2024. It is a decentralized quadratic funding platform that implements Solana Blockchain Links (Blinks).",
    image: 'projects/blinkfund.png',
    gitUrl: 'https://github.com/Laikaiyong/blink.fund',
    featured: false,
  },
  {
    id: 7,
    index: '13',
    title: 'Sol-Healthy',
    description:
      "This is my team's submission for Monash Hackfest 2024. It is an all in one healthcare solution that implements elements of Solana.",
    image: '/projects/solhealthy.png',
    gitUrl: 'https://github.com/ShaunLim08/sol-healthy',
    featured: false,
  },
  {
    id: 6,
    index: '14',
    title: 'EzBiznes',
    description:
      'Submission for Google Workspace Hackathon 2024. Its an all in one workspace to streamline SME operations.',
    image: '/projects/ezbiznes.png',
    gitUrl: 'https://github.com/Laikaiyong/EzBisness',
    featured: false,
  },
  {
    id: 5,
    index: '15',
    title: 'Healthify',
    description:
      'Submission for Devmatch Hackathon 2024. It is a all in one healthcare application that implements MasChain API.',
    image: '/projects/healthify.png',
    gitUrl: 'https://github.com/ShaunLim08/Healthify',
    featured: false,
  },
  {
    id: 4,
    index: '16',
    title: 'AlgoAid',
    description:
      'Submission for Blockchain For Good Malaysian Inter-Varsity Hackathon. It is a Social Good App that uses blockchain to raise funds.',
    image: '/projects/algoaid.png',
    gitUrl: 'https://github.com/Laikaiyong/Algo-Aid',
    featured: false,
  },
  {
    id: 3,
    index: '17',
    title: 'BLOCKCHESS',
    description:
      "This is my team's submission for ETHKL2023 Hackathon. It integrates chess with a waging system using smart contracts to elevate the game experience.",
    image: '/projects/blockchess.png',
    gitUrl: 'https://github.com/Jeanqianying/ETHKL',
    featured: false,
  },
  {
    id: 2,
    index: '18',
    title: 'SurvOwl',
    description:
      "Submission for APUBCC's Sparkathon. It uses POAP tokens to incentivize respondents and verify surveys.",
    image: '/projects/survowl1.png',
    gitUrl: 'https://github.com/codyy6/SparkathonWithShaun',
    featured: false,
  },
  {
    id: 1,
    index: '19',
    title: 'Aeonify',
    description:
      'Submission for APAC Web 2.5 Ideathon. Its an idea that merges Web3 elements with the retail company Aeon.',
    image: 'projects/aeonify.png',
    gitUrl:
      'https://www.canva.com/design/DAFnTRYltHc/lpdv3ivL9vUUq9QfiszG5Q/view?utm_content=DAFnTRYltHc&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const featuredProjects = projectData.filter((p) => p.featured);
  const otherProjects = projectData.filter((p) => !p.featured);

  return (
    <section className="w-full border-b-2 border-black dark:border-white py-16 sm:py-24 bg-white dark:bg-[#080808] transition-colors duration-150" id="projects">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10 pb-4 border-b-2 border-black dark:border-white">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#FF3B00] mb-2 font-bold">
              // SECTION_03 // PRODUCTION_REGISTRY
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl font-normal text-black dark:text-white leading-tight">
              My Projects
            </h2>
          </div>

          {/* Filter Switcher */}
          <div className="flex border-2 border-black dark:border-white font-mono text-xs font-bold uppercase">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 transition-colors ${
                filter === 'all'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-white text-black dark:bg-[#080808] dark:text-white hover:bg-neutral-100 dark:hover:bg-[#1A1A1A]'
              }`}
            >
              ALL_PROJECTS ({projectData.length})
            </button>
            <button
              onClick={() => setFilter('recent')}
              className={`px-4 py-2 border-l-2 border-black dark:border-white transition-colors ${
                filter === 'recent'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-white text-black dark:bg-[#080808] dark:text-white hover:bg-neutral-100 dark:hover:bg-[#1A1A1A]'
              }`}
            >
              RECENT_PROJECTS ({featuredProjects.length})
            </button>
          </div>
        </div>

        {/* Tier 1: Recent Projects (Asymmetrical Alternating Rows) */}
        <div className="mb-16">
          <div className="font-mono text-xs uppercase font-bold text-black dark:text-[#A3A3A3] mb-6 flex items-center justify-between">
            <span>[ FOCUS_INDEX: RECENT_PROJECTS ]</span>
            <span>TOP_06_HIGHLIGHTS</span>
          </div>

          <div className="space-y-10">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const resolvedImg = project.image.startsWith('/') ? project.image : `/${project.image}`;
              const isCanva = project.gitUrl.includes('canva.com');

              return (
                <div
                  key={project.id}
                  className="border-2 border-black dark:border-white bg-neutral-50 dark:bg-[#0E0E0E]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    {/* Media Column (Alternating 7 cols / 5 cols) */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? 'lg:order-1' : 'lg:order-2 border-t-2 lg:border-t-0 lg:border-l-2 border-black dark:border-white'
                      } ${isEven ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-white' : ''}`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-black">
                        <img
                          src={resolvedImg}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter contrast-105 hover:contrast-115 transition-all duration-300"
                        />
                        <div className="absolute top-2 left-2 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-white/20">
                          PROJ_INDEX // {project.index}
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Description Column (5 cols) */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        <div className="font-mono text-xs uppercase font-bold text-[#FF3B00] mb-2 flex items-center gap-2">
                          <span>RECENT PROJECT</span>
                          <span>//</span>
                          <span>NO_{project.index}</span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl text-black dark:text-white font-normal mb-4">
                          {project.title}
                        </h3>

                        <p className="font-mono text-xs sm:text-sm text-black dark:text-[#CCCCCC] leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black dark:border-neutral-800 flex items-center justify-between">
                        <Link
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutalist-btn px-4 py-2 text-xs uppercase flex items-center gap-2"
                        >
                          <span>{isCanva ? 'VIEW_PRESENTATION' : 'VIEW_SOURCE_CODE'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="font-mono text-[10px] text-black dark:text-[#888888] uppercase">
                          {isCanva ? 'DECK_LINK' : 'GITHUB_REPO'}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Project Archive (Dense Architectural Ledger) */}
        {filter === 'all' && (
          <div className="pt-10 border-t-2 border-black dark:border-white">
            <div className="font-mono text-xs uppercase font-bold text-black dark:text-[#A3A3A3] mb-6 flex items-center justify-between">
              <span>[ REGISTRY_ARCHIVE: ADDITIONAL_PROJECTS ]</span>
              <span>INDEX_{otherProjects.length}_ENTRIES</span>
            </div>

            {/* Asymmetrical 2-Column Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => {
                const resolvedImg = project.image.startsWith('/') ? project.image : `/${project.image}`;
                const isCanva = project.gitUrl.includes('canva.com');

                return (
                  <div
                    key={project.id}
                    className="border-2 border-black dark:border-white bg-white dark:bg-[#0E0E0E] flex flex-col justify-between"
                  >
                    <div>
                      {/* 16:9 Image Container */}
                      <div className="aspect-video w-full border-b-2 border-black dark:border-white bg-black overflow-hidden relative">
                        <img
                          src={resolvedImg}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-white/20">
                          {project.index} // ARCHIVE
                        </div>
                      </div>

                      <div className="p-5 sm:p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-serif text-2xl text-black dark:text-white font-normal">
                            {project.title}
                          </h4>
                          <span className="font-mono text-[10px] text-[#FF3B00] font-bold">
                            [{project.index}]
                          </span>
                        </div>

                        <p className="font-mono text-xs text-black dark:text-[#CCCCCC] leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0">
                      <Link
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutalist-btn-outline w-full py-2.5 text-xs uppercase flex items-center justify-center gap-2"
                      >
                        <span>{isCanva ? 'VIEW_PRESENTATION' : 'VIEW_ON_GITHUB'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
