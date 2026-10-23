import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, featured = false }) => {
  const [imgError, setImgError] = useState(false);

  // Normalize image path: prepend '/' if not present
  const resolvedImg = imgUrl.startsWith('/') ? imgUrl : `/${imgUrl}`;

  // Check if link is a presentation (e.g. Canva)
  const isCanva = gitUrl.includes('canva.com');

  return (
    <div
      className={`bento-card overflow-hidden flex flex-col justify-between group ${
        featured
          ? 'border-slate-300/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:border-orange-500/50 hover:shadow-[0_16px_36px_-6px_rgba(249,115,22,0.12)]'
          : 'hover:border-slate-300'
      }`}
    >
      {/* Media Window - 16:9 aspect-video ensures exact 16:9 screenshot preservation without cropping */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {!imgError ? (
          <img
            src={resolvedImg}
            alt={title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
            <FolderGit2 className="w-10 h-10" />
          </div>
        )}

        {/* Floating Top Pill for Recent Projects */}
        {featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 shadow-sm">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>Recent Project</span>
          </div>
        )}

        {/* Quick Action Overlay */}
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
          aria-label={`View ${title} repository`}
        >
          <div className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>{isCanva ? 'View Presentation' : 'View Code on GitHub'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
              {title}
            </h3>
            {isCanva ? (
              <span className="text-xs px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-medium border border-purple-200">
                Deck
              </span>
            ) : (
              <Github className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
            )}
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">
          <span>{isCanva ? 'View Deck' : 'View Project'}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
