import React, { useState } from 'react';
import { 
  Sparkles, 
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
    <section id="free-resources" className="py-14 sm:py-20 md:py-24 bg-[#FAFBFD] border-t border-[#E9EDF3] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-0">
        <div className="absolute top-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#E0F7FA]/70 filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#FFE8E8]/60 filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#10B981]/30 text-[11px] sm:text-xs font-bold text-[#059669] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>100% Free Open-Access Section For Everyone</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#181E28] tracking-tight leading-tight">
            Free Clinical Microbiology Hub
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Open resources dedicated to students, doctors, residents, and lab professionals. Explore short video stories, diagnostic pearls, real-time alerts, and microscopic clinical cases.
          </p>

          <div className="pt-1">
            <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#E9EDF3] text-[#181E28] inline-block">
              No registration or subscription required · Available 24/7
            </span>
          </div>
        </div>

        {/* 4 Interactive Category Tabs with smooth mobile horizontal scroll */}
        <div className="flex justify-start sm:justify-center mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 px-1">
          <div className="inline-flex p-1 sm:p-1.5 bg-white border border-[#E9EDF3] rounded-xl sm:rounded-2xl shadow-2xs gap-1 shrink-0">
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'stories'
                  ? 'bg-[#FF4D4D] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#181E28] hover:bg-[#FAFBFD]'
              }`}
            >
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Infectious Stories (Shorts)</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'blog'
                  ? 'bg-[#FF8A3D] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#181E28] hover:bg-[#FAFBFD]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Micro Blog</span>
            </button>

            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'news'
                  ? 'bg-[#0EA5E9] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#181E28] hover:bg-[#FAFBFD]'
              }`}
            >
              <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Infectious News</span>
            </button>

            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'images'
                  ? 'bg-[#10B981] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#181E28] hover:bg-[#FAFBFD]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Image Bank with Cases</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INFECTIOUS STORIES (SHORT VIDEO FORMAT) */}
        {activeTab === 'stories' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {INFECTIOUS_STORIES.map((story) => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-4 sm:p-5 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Simulated Vertical Video Frame */}
                    <div className="relative aspect-[9/13] w-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-black text-white p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                      
                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between gap-1">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                          {story.category}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded-full">
                          {story.duration}
                        </span>
                      </div>

                      {/* Middle Play Button */}
                      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Pathogen Overlay */}
                      <div className="relative z-10 space-y-0.5 sm:space-y-1">
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#FFC861] italic">
                          {story.pathogen}
                        </div>
                        <h4 className="text-xs font-black text-white leading-snug line-clamp-2">
                          {story.title}
                        </h4>
                      </div>
                    </div>

                    {/* Teaser Description */}
                    <div>
                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                        {story.vignetteTeaser}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-bold">
                    <span className="text-[#64748B]">{story.views}</span>
                    <span className="text-[#FF4D4D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Watch Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Story Player Modal */}
            {selectedStory && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#181E28]/70 backdrop-blur-xs animate-in fade-in"
                onClick={() => setSelectedStory(null)}
                role="dialog"
                aria-modal="true"
              >
                <div 
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] max-w-sm sm:max-w-md w-full p-4 sm:p-6 shadow-2xl space-y-4 animate-in zoom-in-95 max-h-[92vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5">
                    <span className="text-[11px] sm:text-xs font-bold text-[#FF4D4D] bg-[#FFE8E8] px-2.5 py-0.5 rounded-full">
                      Infectious Story · 60s Reel
                    </span>
                    <button 
                      onClick={() => setSelectedStory(null)} 
                      className="p-1 text-[#64748B] hover:text-[#181E28] rounded-lg hover:bg-[#FAFBFD] transition-colors cursor-pointer"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="aspect-[9/12] w-full rounded-xl sm:rounded-2xl bg-[#0F172A] text-white p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FFC861] italic">{selectedStory.pathogen}</span>
                      <span className="text-xs font-mono">{selectedStory.duration}</span>
                    </div>

                    <div className="my-auto text-center space-y-2 sm:space-y-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center mx-auto shadow-md">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-white">{selectedStory.title}</h3>
                      <p className="text-[11px] sm:text-xs text-white/80 max-w-xs mx-auto leading-relaxed">
                        {selectedStory.vignetteTeaser}
                      </p>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md text-[10px] sm:text-[11px] text-[#FFC861] border border-white/15">
                      <strong className="text-white block mb-0.5">High-Yield Clinical Pearl:</strong>
                      {selectedStory.keyPearl}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStory(null)}
                    className="w-full py-2.5 rounded-xl bg-[#181E28] hover:bg-[#334155] text-white text-xs font-bold transition-colors cursor-pointer"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {MICRO_BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#64748B]">
                    <span>{post.date}</span>
                    <span className="font-semibold text-[#FF8A3D]">{post.readTime}</span>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-black text-[#181E28] tracking-tight leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAFBFD] border border-[#E9EDF3] text-[#475569]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F1F5F9]">
                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="w-full py-2.5 text-xs font-bold text-[#FF8A3D] hover:text-[#E83D3D] bg-[#FFF3E0] hover:bg-[#FFE0B2] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Read Full Micro Blog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Micro Blog Reader Modal */}
            {selectedBlog && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#181E28]/70 backdrop-blur-xs animate-in fade-in"
                onClick={() => setSelectedBlog(null)}
                role="dialog"
                aria-modal="true"
              >
                <div 
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] max-w-lg sm:max-w-xl w-full p-4 sm:p-6 lg:p-8 shadow-2xl space-y-4 sm:space-y-5 animate-in zoom-in-95 max-h-[88vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5">
                    <span className="text-[11px] sm:text-xs font-bold text-[#FF8A3D] bg-[#FFF3E0] px-2.5 py-0.5 rounded-full">
                      Micro Blog · {selectedBlog.readTime}
                    </span>
                    <button 
                      onClick={() => setSelectedBlog(null)} 
                      className="p-1 text-[#64748B] hover:text-[#181E28] rounded-lg hover:bg-[#FAFBFD] transition-colors cursor-pointer"
                      aria-label="Close article"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-2xl font-black text-[#181E28] leading-tight">
                      {selectedBlog.title}
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      By {selectedBlog.author} · {selectedBlog.date}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-[#F1F5F9]">
                    {selectedBlog.fullContent.map((paragraph, idx) => (
                      <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3]">
                        {paragraph}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="w-full py-2.5 rounded-xl bg-[#181E28] text-white text-xs font-bold cursor-pointer hover:bg-[#334155] transition-colors"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {INFECTIOUS_NEWS.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        news.tag === 'AMR Alert'
                          ? 'bg-[#FFE8E8] text-[#FF4D4D] border-[#FFD5D5]'
                          : news.tag === 'Outbreak Watch'
                          ? 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]'
                          : 'bg-[#E0F7FA] text-[#0284C7] border-[#B2EBF2]'
                      }`}>
                        {news.tag}
                      </span>
                      <span className="text-[11px] text-[#64748B]">{news.date}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-[#181E28] tracking-tight leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                    <span className="text-[#64748B] font-medium text-[11px] sm:text-xs">{news.source}</span>
                    <span className="text-[#0EA5E9] font-bold flex items-center gap-1 text-[11px] sm:text-xs">
                      <span>Verified Bulletin</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E9EDF3] text-center text-xs text-[#64748B]">
              Real-time antimicrobial resistance surveillance and global pathogen notifications refreshed daily.
            </div>
          </div>
        )}

        {/* TAB 4: IMAGE BANK WITH CLINICAL CASE */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {IMAGE_BANK_CASES.map((item) => {
              const isRevealed = !!revealedCases[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Header & Smear Type */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                          Microscopic Image Bank
                        </span>
                        <span className="text-[#64748B] text-[10px] sm:text-[11px] font-mono">{item.magnification}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-[#181E28] tracking-tight pt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0EA5E9]">
                        {item.smearOrCultureType}
                      </p>
                    </div>

                    {/* Clinical Case Vignette */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1 text-xs">
                      <strong className="text-[#181E28] block text-[10px] sm:text-[11px] uppercase tracking-wider">
                        Patient Presentation:
                      </strong>
                      <p className="text-[#475569] leading-relaxed">
                        {item.clinicalVignette}
                      </p>
                    </div>

                    {/* Microscopic Features */}
                    <div className="space-y-1">
                      <strong className="text-xs font-bold text-[#181E28] block">
                        Microscopic Findings:
                      </strong>
                      {item.microscopicFeatures.map((feat, idx) => (
                        <div key={idx} className="text-[11px] sm:text-xs text-[#64748B] flex items-start gap-1.5">
                          <span className="text-[#10B981] font-bold shrink-0">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Revealed Answer Box */}
                    {isRevealed && (
                      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] space-y-1.5 sm:space-y-2 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#059669] block">
                            Confirmed Diagnosis & Organism:
                          </span>
                          <span className="text-xs sm:text-sm font-black text-[#065F46]">
                            {item.diagnosis}
                          </span>
                        </div>

                        <div className="text-[11px] sm:text-xs text-[#047857] leading-relaxed pt-1 border-t border-[#A7F3D0]">
                          <strong>Clinical Pearl:</strong> {item.pearls}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <div className="pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-[#F1F5F9]">
                    <button
                      onClick={() => toggleRevealDiagnosis(item.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                        isRevealed
                          ? 'bg-[#FAFBFD] text-[#64748B] hover:text-[#181E28] border border-[#E9EDF3]'
                          : 'bg-[#10B981] hover:bg-[#059669] text-white shadow-xs'
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
                          <span>Reveal Diagnosis & Clinical Pearls</span>
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