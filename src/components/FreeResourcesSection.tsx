import React, { useState } from 'react';
import { 
  Video, 
  FileText, 
  Bell, 
  Image as ImageIcon, 
  Play, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ExternalLink,
  X
} from 'lucide-react';
import { 
  INFECTIOUS_STORIES, 
  MICRO_BLOG_POSTS, 
  INFECTIOUS_NEWS, 
  IMAGE_BANK_CASES 
} from '../data/mockData';
import { InfectiousStory, MicroBlogPost } from '../types';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

export const FreeResourcesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stories' | 'blog' | 'news' | 'images'>('stories');
  
  // Interactive State for Stories
  const [selectedStory, setSelectedStory] = useState<InfectiousStory | null>(null);

  // Interactive State for Micro Blog Reader
  const [selectedBlog, setSelectedBlog] = useState<MicroBlogPost | null>(null);

  // Lock body scroll when any sub-modal is open
  const isAnySubModalOpen = Boolean(selectedStory || selectedBlog);
  useBodyScrollLock(isAnySubModalOpen);
  useEscapeKey(() => {
    setSelectedStory(null);
    setSelectedBlog(null);
  }, isAnySubModalOpen);

  // Interactive State for Image Bank (Revealed Diagnosis Map)
  const [revealedCases, setRevealedCases] = useState<Record<string, boolean>>({});

  const toggleRevealDiagnosis = (caseId: string) => {
    setRevealedCases(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <section id="free-resources" className="py-14 sm:py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <span>Free Open-Access Hub</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Free Clinical Microbiology Hub
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2">
            Open educational resources available to all medical students, postgraduate trainees, and clinicians. Explore high-yield video stories, diagnostic articles, AMR surveillance bulletins, and microscopic clinical cases.
          </p>

          <div className="pt-2 text-xs font-medium text-slate-500">
            100% Free · No registration required for this section · Open 24/7
          </div>
        </div>

        {/* 4 Interactive Category Tabs */}
        <div className="flex justify-start sm:justify-start mb-8 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-lg shadow-2xs gap-1 shrink-0">
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'stories'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Video className="w-3.5 h-3.5 shrink-0" />
              <span>Infectious Stories (Shorts)</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'blog'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>Micro Blog</span>
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'news'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bell className="w-3.5 h-3.5 shrink-0" />
              <span>Infectious News & AMR</span>
            </button>

            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'images'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Image Bank with Cases</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INFECTIOUS STORIES (SHORT VIDEO FORMAT) */}
        {activeTab === 'stories' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {INFECTIOUS_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col flex-1">
                    {/* Header: duration + views */}
                    <div className="h-6 flex items-center justify-between text-xs mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {story.duration}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{story.views}</span>
                    </div>

                    {/* Pathogen Tag */}
                    <div className="h-5 flex items-center mb-1">
                      <span className="text-[11px] font-bold text-[#FF4F4F] italic block truncate">
                        {story.pathogen}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="h-12 flex items-center mb-2">
                      <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                        {story.title}
                      </h3>
                    </div>

                    {/* Vignette Teaser */}
                    <div className="h-16 flex items-start mb-3 overflow-hidden">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {story.vignetteTeaser}
                      </p>
                    </div>

                    {/* Diagnostic Pearl Box */}
                    <div className="h-20 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex flex-col justify-start mb-4 overflow-hidden">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5 font-mono">
                        Diagnostic Pearl:
                      </span>
                      <p className="text-slate-800 text-[11px] leading-relaxed line-clamp-2">
                        {story.keyPearl}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="w-full h-10 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch 60s Reel</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for Playing Selected Story */}
            {selectedStory && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in"
                onClick={() => setSelectedStory(null)}
                role="dialog"
                aria-modal="true"
              >
                <div 
                  className="bg-white rounded-xl border border-slate-200 max-w-sm sm:max-w-md w-full p-5 shadow-xl space-y-4 animate-in zoom-in-95 max-h-[92vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-900">
                      Infectious Story · 60s Clinical Reel
                    </span>
                    <button 
                      onClick={() => setSelectedStory(null)} 
                      className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="aspect-[9/12] w-full rounded-lg bg-slate-950 text-white p-5 flex flex-col justify-between relative overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 italic">{selectedStory.pathogen}</span>
                      <span className="text-xs font-mono text-slate-400">{selectedStory.duration}</span>
                    </div>

                    <div className="my-auto text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#FF4F4F] text-white flex items-center justify-center mx-auto shadow">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                      <h3 className="text-base font-bold text-white">{selectedStory.title}</h3>
                      <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                        {selectedStory.vignetteTeaser}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/10 text-xs text-amber-200 border border-white/10">
                      <strong className="text-white block mb-0.5">High-Yield Clinical Pearl:</strong>
                      {selectedStory.keyPearl}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStory(null)}
                    className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Done Exploring Story
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MICRO BLOG */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {MICRO_BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Date & Read Time */}
                  <div className="h-6 flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>{post.date}</span>
                    <span className="font-semibold text-slate-700">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <div className="h-14 flex items-center mb-2">
                    <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  {/* Excerpt */}
                  <div className="h-16 flex items-start mb-4 overflow-hidden">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="h-7 flex items-center gap-1.5 mb-4">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Read Action */}
                <div className="pt-4 mt-auto border-t border-slate-100">
                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="w-full h-10 py-2 text-xs font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-slate-900 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Micro Blog Reader Modal */}
            {selectedBlog && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in"
                onClick={() => setSelectedBlog(null)}
                role="dialog"
                aria-modal="true"
              >
                <div 
                  className="bg-white rounded-xl border border-slate-200 max-w-lg sm:max-w-xl w-full p-6 shadow-xl space-y-4 animate-in zoom-in-95 max-h-[88vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-xs font-bold text-slate-700">
                      Micro Blog · {selectedBlog.readTime}
                    </span>
                    <button 
                      onClick={() => setSelectedBlog(null)} 
                      className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Close article"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {selectedBlog.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      By {selectedBlog.author} · {selectedBlog.date}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    {selectedBlog.fullContent.map((paragraph, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                        {paragraph}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="w-full py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold cursor-pointer hover:bg-slate-800 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: INFECTIOUS NEWS */}
        {activeTab === 'news' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {INFECTIOUS_NEWS.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col flex-1">
                    {/* Tag & Date */}
                    <div className="h-6 flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {news.tag}
                      </span>
                      <span className="text-xs text-slate-400">{news.date}</span>
                    </div>

                    {/* Title */}
                    <div className="h-14 flex items-center mb-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2">
                        {news.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <div className="h-20 flex items-start mb-4 overflow-hidden">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Source & Link */}
                  <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between text-xs h-10">
                    <span className="text-slate-500 font-medium text-xs">{news.source}</span>
                    <span className="text-slate-900 font-semibold flex items-center gap-1 text-xs">
                      <span>Verified Bulletin</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-white border border-slate-200 text-center text-xs text-slate-500 font-medium">
              Real-time antimicrobial resistance surveillance and global pathogen notifications refreshed daily.
            </div>
          </div>
        )}

        {/* TAB 4: IMAGE BANK WITH CLINICAL CASES (Compact & Short, Matching Other Tabs) */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {IMAGE_BANK_CASES.map((item) => {
              const isRevealed = !!revealedCases[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col flex-1">
                    
                    {/* Header: Tag & Magnification (Aligned Height) */}
                    <div className="h-6 flex items-center justify-between text-xs mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Photomicrograph
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{item.magnification}</span>
                    </div>

                    {/* Title Zone (Equal Height across all 3 cards) */}
                    <div className="h-12 flex items-center mb-1">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    {/* Smear / Stain Subtitle (Equal Height across all 3 cards) */}
                    <div className="h-7 flex items-center mb-3">
                      <p className="text-xs font-semibold text-slate-600 truncate">
                        {item.smearOrCultureType}
                      </p>
                    </div>

                    {/* Concise Clinical Vignette (Standard 3-Line Excerpt matching Blog & News) */}
                    <div className="h-20 flex items-start mb-3 overflow-hidden">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {item.clinicalVignette}
                      </p>
                    </div>

                    {/* Key Diagnostic Clue Badge */}
                    <div className="h-7 flex items-center mb-4">
                      <span className="text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded truncate w-full" title={item.microscopicFeatures[0]}>
                        Key Clue: {item.microscopicFeatures[0]}
                      </span>
                    </div>

                    {/* Revealed Answer Box (Compact & Informative) */}
                    {isRevealed && (
                      <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 space-y-1.5 animate-in fade-in duration-150 mb-3 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                            Confirmed Diagnosis
                          </span>
                          <span className="text-[10px] font-mono text-emerald-700 font-semibold">100% Match</span>
                        </div>
                        <div className="text-xs font-bold text-emerald-950">
                          {item.diagnosis}
                        </div>
                        <p className="text-[11px] text-emerald-900 leading-relaxed pt-1 border-t border-emerald-200/80 line-clamp-2">
                          <strong>Pearl:</strong> {item.pearls}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Toggle Button (Pinned to Bottom on Same Parallel Line) */}
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <button
                      onClick={() => toggleRevealDiagnosis(item.id)}
                      className={`w-full h-10 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isRevealed
                          ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-2xs'
                      }`}
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5 shrink-0" />
                          <span>Hide Diagnosis</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5 shrink-0" />
                          <span>Reveal Diagnosis & Organism</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
