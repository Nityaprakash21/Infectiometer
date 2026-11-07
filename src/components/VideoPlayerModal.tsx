import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Download, BookOpen, Clock, Volume2, Sparkles, Lock } from 'lucide-react';
import { VideoLecture } from '../types';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface VideoPlayerModalProps {
  video: VideoLecture | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  onOpenAuth
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Lock body scroll and enable Escape key
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  if (!isOpen || !video) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#181E28]/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 bg-[#FAFBFD] border-b border-[#E9EDF3] flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
              video.isFreeShowcase 
                ? 'bg-[#FFE8E8] text-[#FF4D4D] border-[#FFD5D5]' 
                : 'bg-[#F1F5F9] text-[#64748B] border-[#CBD5E1]'
            }`}>
              {video.isFreeShowcase ? 'Free Showcase Lecture' : 'Premium Video'}
            </span>
            <span className="text-xs text-[#64748B] truncate">
              {video.subject} · {video.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#181E28] rounded-xl hover:bg-white transition-colors cursor-pointer shrink-0"
            aria-label="Close lecture"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 flex-1">
          
          {/* Simulated Video Player Screen */}
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl bg-[#0F172A] overflow-hidden flex flex-col justify-between p-3.5 sm:p-6 text-white shadow-lg group">
            {/* Background Medical Visual */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Video Watermark & Tag */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-[#FFC861]">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF8A3D]" />
                <span>Infectiometer MasterClass</span>
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-mono flex items-center gap-1.5">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Center Play/Pause Trigger */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-2 sm:space-y-3">
              {video.isFreeShowcase ? (
                <>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#FF4D4D] hover:bg-[#E83D3D] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-7 h-7 sm:w-8 sm:h-8" /> : <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />}
                  </button>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">
                    {isPlaying ? 'Lecture Playing (Audio & Slides Stream)' : 'Click to Watch Free Showcase Lecture'}
                  </p>
                </>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mx-auto">
                    <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-center space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Full Video Enrolled Content</h4>
                    <p className="text-xs text-white/70 max-w-sm">
                      This lecture is part of the complete curriculum for {video.category === 'mbbs' ? '2nd Year MBBS' : 'NEET-PG / INI-CET'}.
                    </p>
                    <button
                      onClick={onOpenAuth}
                      className="mt-2 px-5 py-2 rounded-xl bg-[#FF4D4D] hover:bg-[#E83D3D] text-white text-xs font-bold shadow-md cursor-pointer transition-colors active:scale-95"
                    >
                      Unlock Full Access
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Player Bottom Controls Bar */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2">
              <div className="w-full bg-white/20 h-1 sm:h-1.5 rounded-full overflow-hidden">
                <div className={`h-full bg-[#FF4D4D] transition-all duration-300 ${isPlaying ? 'w-2/5' : 'w-0'}`} />
              </div>
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/80">
                <span>{isPlaying ? '07:32' : '00:00'} / {video.duration}</span>
                <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                  <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  1080p Full HD
                </span>
              </div>
            </div>
          </div>

          {/* Title and Speaker Details */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-[#F1F5F9] pb-4 sm:pb-5">
            <div>
              <h3 className="text-lg sm:text-2xl font-black text-[#181E28] tracking-tight leading-snug">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                Taught by <strong className="text-[#181E28]">{video.instructor}</strong> · {video.instructorTitle}
              </p>
            </div>

            {video.slideDeckIncluded && (
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-[#181E28] hover:text-[#FF4D4D] bg-[#FAFBFD] hover:bg-white border border-[#E9EDF3] rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start active:scale-95"
              >
                <Download className="w-4 h-4 text-[#FF4D4D]" />
                <span>{downloaded ? 'Slide Deck Downloaded!' : 'Download Slide Deck (.PDF)'}</span>
              </button>
            )}
          </div>

          {/* High-Yield Key Points Covered */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#181E28] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#FF8A3D]" />
              <span>Key Concept Takeaways Covered in this Video:</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {video.keyPoints.map((pt, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] flex items-start gap-2.5 text-xs text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};