import React, { useState } from 'react';
import { Play, Sparkles, Clock, Lock, BookOpen, Download, User, ArrowRight } from 'lucide-react';
import { VIDEO_LECTURES } from '../data/mockData';
import { VideoLecture } from '../types';

interface VideosSectionProps {
  onWatchVideo: (video: VideoLecture) => void;
  onOpenAuth: () => void;
}

export const VideosSection: React.FC<VideosSectionProps> = ({ onWatchVideo, onOpenAuth }) => {
  const [filter, setFilter] = useState<'all' | 'mbbs' | 'neet-pg'>('all');

  const filteredVideos = VIDEO_LECTURES.filter(v => {
    if (filter === 'all') return true;
    return v.category === filter;
  });

  return (
    <section id="videos" className="py-20 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-xs font-bold text-[#FF8A3D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MasterClass Video Lectures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#181E28] tracking-tight">
            Clinical Videos & Conceptual Walkthroughs
          </h2>

          <p className="text-base text-[#64748B] leading-relaxed">
            High-yield clinical lectures taught by expert microbiologists. Every video is accompanied by an annotated slide deck for rapid revision before university & competitive exams.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-[#FF4D4D] bg-[#FFE8E8] border border-[#FFD5D5] px-3 py-1 rounded-full">
              ★ 2 Free Showcase Lectures Available Immediately
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#FAFBFD] border border-[#E9EDF3] rounded-2xl text-xs font-bold">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === 'all' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              All Video MasterClasses
            </button>
            <button
              onClick={() => setFilter('mbbs')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === 'mbbs' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              2nd Year MBBS Curriculum
            </button>
            <button
              onClick={() => setFilter('neet-pg')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filter === 'neet-pg' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              NEET-PG / INI-CET High Yield
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#FAFBFD] rounded-3xl border border-[#E9EDF3] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Video Thumbnail Wrapper */}
                <div 
                  onClick={() => onWatchVideo(video)}
                  className="relative aspect-video w-full bg-[#181E28] overflow-hidden cursor-pointer"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E83D3D] transition-all">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${
                      video.isFreeShowcase 
                        ? 'bg-[#FF4D4D] text-white shadow-xs' 
                        : 'bg-black/60 text-white/90 border border-white/20'
                    }`}>
                      {video.isFreeShowcase ? 'Free Showcase Video' : 'Enrolled Course'}
                    </span>

                    <span className="text-[11px] font-mono text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </span>
                  </div>

                  {/* Bottom Category Tag on Image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold text-white/90 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {video.subject}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#64748B]">
                    <span className="font-semibold flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#FF8A3D]" />
                      <span>{video.instructor}</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#FF4D4D] uppercase">
                      {video.category === 'mbbs' ? '2nd Year MBBS' : 'NEET-PG / INI-CET'}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onWatchVideo(video)}
                    className="text-lg font-black text-[#181E28] tracking-tight hover:text-[#FF4D4D] transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {video.title}
                  </h3>

                  {/* High Yield Keypoints */}
                  <div className="space-y-1.5 pt-1">
                    {video.keyPoints.slice(0, 2).map((kp, idx) => (
                      <div key={idx} className="text-xs text-[#475569] flex items-start gap-2">
                        <span className="text-[#FF4D4D] font-bold">•</span>
                        <span className="truncate">{kp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="p-6 pt-0 border-t border-[#F1F5F9] mt-3">
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xs font-semibold text-[#181E28] flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#FF8A3D]" />
                    <span>Slide Deck Included (.PDF)</span>
                  </span>

                  <button
                    onClick={() => onWatchVideo(video)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF4D4D] hover:text-[#E83D3D] transition-colors cursor-pointer"
                  >
                    <span>{video.isFreeShowcase ? 'Watch Free Now' : 'Lecture Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAFBFD] border border-[#E9EDF3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-[#181E28]">
              Looking for the Complete Video Lecture Series?
            </h4>
            <p className="text-xs text-[#64748B]">
              Full video library covering General Bacteriology, Systemic Microbiology, Virology, Mycology, Parasitology & AMR.
            </p>
          </div>

          <button
            onClick={onOpenAuth}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Access Full Library
          </button>
        </div>

      </div>
    </section>
  );
};
