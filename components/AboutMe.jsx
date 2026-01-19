'use client';
import { useTransition, useState, useRef, useEffect } from 'react';

//1d
const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>C</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Product Management</li>
      </ul>
    ),
  },
  {
    title: 'Experiences',
    id: 'experiences',
    content: (
      <ul className="list-disc pl-2">
        <li>Product Manager @ CoinW</li>
        <li>Notion Campus Leader @ APU</li>
        <li>Product Manager Intern @ TNG Digital</li>
        <li>R&D, Community, Bootcamp Team @ APUBCC</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://www.credly.com/badges/685bb3a9-4d3b-4115-abef-5e60c9aed4eb/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            AWS Certified Cloud Practicioner
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/92b48f4e-9b43-4177-92d8-ae18dedea11b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            AWS re/Start Graduate
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1IVIgmBMz8m62q9GJmua-9nD9pyLN3JGE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            HCCDA - Tech Essentials
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/4397a50a-797b-4151-926d-277b2dd94146/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            AWS Certified AI Practitioner
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/9a26798a-ccad-4c00-9d63-c4b41bd01c7d/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            AWS Certified AI Practitioner Early Adopter
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/0d58d17b-918a-4c05-89f2-2db09e3fc416/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            GitHub Foundations
          </a>
        </li>
        <li>
          <a
            href="https://api.badgr.io/public/assertions/0S5K6WtMRBiFwoMCmQgbxA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Postman API Fundamentals Student Expert
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/590d4a30-4f14-4baf-8186-98c661e0dd4f/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Notion Advanced Badge
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/7c27d8c6-4ffd-4c94-8099-6a8e9e9d9756/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Notion Settings & Sharing Badge
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/8d90d44f-8336-4f5c-92d4-0976f85ec2c2/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            CCNA: Introduction to Networks
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/0148dca6-cee8-4e9d-9ef7-19a1abd56d07/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Microsoft Certified: Azure AI Fundamentals
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/73589a13-c0df-4278-a738-32b916e32a69/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Microsoft Certified: Azure Data Fundamentals
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/6e3609c9-dcb0-41a0-a612-c960721b1e20/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Microsoft Certified: Azure Fundamentals
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science @ Asia Pacific University</li>
        <li>Science Stream @ SMJK Yu Hua</li>
      </ul>
    ),
  },
  {
    title: 'Achievements',
    id: 'achievements',
    content: (
      <ul className="list-disc pl-2">
        <li>Devmatch Hackathon 2025 The Graph Track: 4th Place</li>
        <li>
          Blockchain Visualization – Mapping the Solana Ecosystem Bounty 1st
          Place
        </li>
        <li>ETH Global Taipei 2025 Celo AI Agent Track 2nd Runner Up</li>
        <li>BNB Hack Q4 2024 Top 10</li>
        <li>Setel Hackathon 2024 - 2nd Runner Up</li>
        <li>
          ETHKL2024 Top 5 Finalist + WorldCoin 3rd Place in Best Implementation
          of World ID
        </li>
        <li>APUBCC Buildstation 2024 - Champion</li>
        <li>Monash Hackfest 2024 - 3rd Place</li>
        <li>Google Workspace Hackathon 2024 - Champion</li>
        <li>
          Blockchain For Good Malaysian Inter-Varsity Hackathon - Top 10
          Finalist
        </li>
        <li>APUBCC Sparkathon Gnosis Track - 2nd Runner Up</li>
        <li>APAC Web 2.5 Ideathon - E-Commerce Track Winner</li>
      </ul>
    ),
  },
  {
    title: 'Interests',
    id: 'interests',
    content: (
      <ul className="list-disc pl-2">
        <li>Running</li>
        <li>Badminton</li>
        <li>Cars</li>
        <li>Providing Value to Shareholders</li>
      </ul>
    ),
  },
];

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-black pb-1 whitespace-nowrap ${
        active ? 'border-b-2 border-black text-black' : 'text-gray-500'
      }`}
    >
      {children}
    </button>
  );
};

//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const tabsRef = useRef(null);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Scroll active tab into view when it changes
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(
        `button[data-tab="${tab}"]`
      );
      if (activeTab) {
        // Calculate position to center the active tab
        const container = tabsRef.current;
        const scrollLeft =
          activeTab.offsetLeft -
          container.clientWidth / 2 +
          activeTab.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [tab]);

  //1a
  return (
    <section className="text-black" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
        <div className="flex justify-center px-6 sm:px-0">
          <img
            src="/shaun.jpg"
            alt="shaun"
            className="rounded-3xl max-w-full h-auto"
            style={{ maxWidth: '450px', borderRadius: '25px' }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            I am a Year 3 Computer Science student with a passion for Web3 and
            Cloud technology. My experiences usually revolve around community
            building, product management, and participating in hackathons. I am
            always looking for opportunities to learn and grow, so feel free to
            reach out to me!
          </p>

          {/* Scrollable tabs container */}
          <div
            className="mt-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            ref={tabsRef}
          >
            <div className="flex flex-nowrap min-w-max">
              {TAB_DATA.map((item) => (
                <TabButton
                  key={item.id}
                  selectTab={() => handleTabChange(item.id)}
                  active={tab === item.id}
                  data-tab={item.id}
                >
                  {item.title}
                </TabButton>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
