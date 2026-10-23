'use client';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const SKILLS_DATA = [
  'Python',
  'C',
  'Java',
  'Javascript',
  'HTML',
  'CSS',
  'React.js',
  'Next.js',
  'Product Management',
];

const EXPERIENCES_DATA = [
  {
    role: 'Product Manager',
    company: 'CoinW',
    dept: 'Operations & Execution',
  },
  {
    role: 'Notion Campus Leader',
    company: 'APU',
    dept: 'Campus Community',
  },
  {
    role: 'Product Manager Intern',
    company: 'TNG Digital',
    dept: 'Fintech & Digital Payments',
  },
  {
    role: 'R&D, Community, Bootcamp Team',
    company: 'APUBCC',
    dept: 'Blockchain Development',
  },
];

const CERTIFICATIONS_DATA = [
  {
    name: 'AWS Certified Cloud Practicioner',
    url: 'https://www.credly.com/badges/685bb3a9-4d3b-4115-abef-5e60c9aed4eb/public_url',
    issuer: 'AWS',
  },
  {
    name: 'AWS re/Start Graduate',
    url: 'https://www.credly.com/badges/92b48f4e-9b43-4177-92d8-ae18dedea11b',
    issuer: 'AWS',
  },
  {
    name: 'HCCDA - Tech Essentials',
    url: 'https://drive.google.com/file/d/1IVIgmBMz8m62q9GJmua-9nD9pyLN3JGE/view?usp=sharing',
    issuer: 'Huawei Cloud',
  },
  {
    name: 'AWS Certified AI Practitioner',
    url: 'https://www.credly.com/badges/4397a50a-797b-4151-926d-277b2dd94146/public_url',
    issuer: 'AWS',
  },
  {
    name: 'AWS Certified AI Practitioner Early Adopter',
    url: 'https://www.credly.com/badges/9a26798a-ccad-4c00-9d63-c4b41bd01c7d/public_url',
    issuer: 'AWS',
  },
  {
    name: 'GitHub Foundations',
    url: 'https://www.credly.com/badges/0d58d17b-918a-4c05-89f2-2db09e3fc416/public_url',
    issuer: 'GitHub',
  },
  {
    name: 'Postman API Fundamentals Student Expert',
    url: 'https://api.badgr.io/public/assertions/0S5K6WtMRBiFwoMCmQgbxA',
    issuer: 'Postman',
  },
  {
    name: 'Notion Advanced Badge',
    url: 'https://www.credly.com/badges/590d4a30-4f14-4baf-8186-98c661e0dd4f/public_url',
    issuer: 'Notion',
  },
  {
    name: 'Notion Settings & Sharing Badge',
    url: 'https://www.credly.com/badges/7c27d8c6-4ffd-4c94-8099-6a8e9e9d9756/public_url',
    issuer: 'Notion',
  },
  {
    name: 'CCNA: Introduction to Networks',
    url: 'https://www.credly.com/badges/8d90d44f-8336-4f5c-92d4-0976f85ec2c2/public_url',
    issuer: 'Cisco',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    url: 'https://www.credly.com/badges/0148dca6-cee8-4e9d-9ef7-19a1abd56d07/public_url',
    issuer: 'Microsoft',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    url: 'https://www.credly.com/badges/73589a13-c0df-4278-a738-32b916e32a69/public_url',
    issuer: 'Microsoft',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    url: 'https://www.credly.com/badges/6e3609c9-dcb0-41a0-a612-c960721b1e20/public_url',
    issuer: 'Microsoft',
  },
];

const ACHIEVEMENTS_DATA = [
  'ETHGlobal New York 2026 1inch Bounty Track: 2nd Runner Up',
  'Devmatch Hackathon 2025 The Graph Track: 4th Place',
  'Blockchain Visualization – Mapping the Solana Ecosystem Bounty 1st Place',
  'ETH Global Taipei 2025 Celo AI Agent Track 2nd Runner Up',
  'BNB Hack Q4 2024 Top 10',
  'Setel Hackathon 2024 - 2nd Runner Up',
  'ETHKL2024 Top 5 Finalist + WorldCoin 3rd Place in Best Implementation of World ID',
  'APUBCC Buildstation 2024 - Champion',
  'Monash Hackfest 2024 - 3rd Place',
  'Google Workspace Hackathon 2024 - Champion',
  'Blockchain For Good Malaysian Inter-Varsity Hackathon - Top 10 Finalist',
  'APUBCC Sparkathon Gnosis Track - 2nd Runner Up',
  'APAC Web 2.5 Ideathon - E-Commerce Track Winner',
];

const EDUCATION_DATA = [
  { institution: 'Asia Pacific University', program: 'Computer Science' },
  { institution: 'SMJK Yu Hua', program: 'Science Stream' },
];

const INTERESTS_DATA = [
  'Running',
  'Badminton',
  'Cars',
  'Providing Value to Shareholders',
];

const TAB_DATA = [
  { title: 'SKILLS', id: 'skills', count: SKILLS_DATA.length },
  { title: 'EXPERIENCES', id: 'experiences', count: EXPERIENCES_DATA.length },
  { title: 'CERTIFICATIONS', id: 'certifications', count: CERTIFICATIONS_DATA.length },
  { title: 'ACHIEVEMENTS', id: 'achievements', count: ACHIEVEMENTS_DATA.length },
  { title: 'EDUCATION', id: 'education', count: EDUCATION_DATA.length },
  { title: 'INTERESTS', id: 'interests', count: INTERESTS_DATA.length },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="w-full border-b-2 border-black dark:border-white py-16 sm:py-24 bg-white dark:bg-[#080808] transition-colors duration-150" id="aboutMe">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF3B00] mb-3 font-bold flex items-center gap-2">
          <span>// SECTION_02</span>
          <span className="w-8 h-[2px] bg-[#FF3B00] inline-block"></span>
          <span>CURRICULUM_VITAE</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10 pb-4 border-b-2 border-black dark:border-white">
          <h2 className="font-serif text-5xl sm:text-7xl font-normal text-black dark:text-white leading-tight">
            About Me
          </h2>
          <div className="font-mono text-xs text-black dark:text-[#A3A3A3] uppercase">
            DOSSIER // SHAUN_LIM_PROFILE
          </div>
        </div>

        {/* Top Split: Square Photo + Executive Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Square Photo with Crisp 2px Border */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[4/5] border-2 border-black dark:border-white bg-neutral-100 dark:bg-[#121212] overflow-hidden relative">
              <img
                src="/shaun.jpg"
                alt="Shaun Lim"
                className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black text-white p-2.5 font-mono text-xs uppercase flex justify-between">
                <span>OPERATOR_REF</span>
                <span>FIG_02.JPG</span>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 border-2 border-black dark:border-white p-6 sm:p-8 bg-neutral-50 dark:bg-[#0E0E0E]">
            <div className="font-mono text-xs uppercase text-[#FF3B00] font-bold tracking-wider mb-4">
              [ PROFILE_NARRATIVE ]
            </div>
            <p className="font-mono text-sm sm:text-base text-black dark:text-[#E0E0E0] leading-relaxed text-justify">
              I am a Product and Software Engineering professional dedicated to
              bridging the gap between complex engineering solutions and strategic
              product goals. With a strong background in Web3, cloud technologies,
              and fintech systems, I bring a dual perspective to the development
              lifecycle. My expertise spans managing backend trading operations
              and directing technical API support to building award-winning
              decentralized applications across numerous hackathons. Beyond
              driving product lifecycles, I am a dedicated technical community
              leader passionate about scaling blockchain ecosystems and fostering
              developer education.
            </p>
          </div>
        </div>

        {/* Archival Tabular Registry */}
        <div className="border-2 border-black dark:border-white bg-white dark:bg-[#080808]">
          {/* Mechanical Tab Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b-2 border-black dark:border-white divide-x-2 divide-y-2 sm:divide-y-0 divide-black dark:divide-white bg-neutral-100 dark:bg-[#121212] font-mono text-xs uppercase font-bold">
            {TAB_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-3.5 sm:p-4 text-left flex justify-between items-center transition-colors ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'hover:bg-neutral-200 dark:hover:bg-[#1C1C1C] text-black dark:text-white'
                  }`}
                >
                  <span>{tab.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 border ${
                    isActive
                      ? 'border-white text-white dark:border-black dark:text-black bg-transparent'
                      : 'border-black dark:border-white text-black dark:text-white'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Registry Display */}
          <div className="p-6 sm:p-8 min-h-[300px]">
            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="flex flex-wrap gap-2.5">
                {SKILLS_DATA.map((skill) => (
                  <div
                    key={skill}
                    className="font-mono text-xs sm:text-sm uppercase font-bold px-4 py-2.5 border-2 border-black dark:border-white bg-white dark:bg-[#0E0E0E] text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    [ {skill} ]
                  </div>
                ))}
              </div>
            )}

            {/* Experiences */}
            {activeTab === 'experiences' && (
              <div className="divide-y-2 divide-black dark:divide-white border-2 border-black dark:border-white font-mono">
                {EXPERIENCES_DATA.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-50 dark:hover:bg-[#121212] transition-colors"
                  >
                    <div>
                      <div className="text-sm sm:text-base font-bold text-black dark:text-white">
                        {exp.role}
                      </div>
                      <div className="text-xs text-[#FF3B00] font-semibold mt-0.5">
                        @{exp.company}
                      </div>
                    </div>
                    <div className="text-xs uppercase text-black dark:text-[#888888] tracking-wider">
                      {exp.dept}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {activeTab === 'certifications' && (
              <div className="divide-y border-2 border-black dark:border-white font-mono text-xs divide-black dark:divide-neutral-800">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 sm:p-4 flex items-center justify-between gap-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF3B00] font-bold">
                        [{(idx + 1).toString().padStart(2, '0')}]
                      </span>
                      <span className="font-semibold text-black dark:text-white group-hover:text-inherit">
                        {cert.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-black dark:text-[#888888] uppercase hidden sm:inline group-hover:text-inherit">
                        {cert.issuer}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FF3B00]" />
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Achievements */}
            {activeTab === 'achievements' && (
              <div className="divide-y-2 border-2 border-black dark:border-white font-mono text-xs divide-black dark:divide-neutral-800">
                {ACHIEVEMENTS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex items-start gap-3 hover:bg-neutral-50 dark:hover:bg-[#121212] transition-colors"
                  >
                    <span className="text-[#FF3B00] font-bold flex-shrink-0">
                      #{(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-black dark:text-[#E0E0E0] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="divide-y-2 divide-black dark:divide-white border-2 border-black dark:border-white font-mono">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="text-base font-bold text-black dark:text-white">
                      {edu.program}
                    </div>
                    <div className="text-xs uppercase text-[#FF3B00] font-semibold">
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Interests */}
            {activeTab === 'interests' && (
              <div className="flex flex-wrap gap-3 font-mono">
                {INTERESTS_DATA.map((interest, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3 border-2 border-black dark:border-white text-xs uppercase font-bold text-black dark:text-white bg-neutral-100 dark:bg-[#121212]"
                  >
                    [ {interest} ]
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
