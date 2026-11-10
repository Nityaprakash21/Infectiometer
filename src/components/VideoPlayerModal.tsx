import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Download, BookOpen, Clock, Volume2, Video, Lock } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
              video.isFreeShowcase 
                ? 'bg-red-50 text-[#FF4F4F] border-red-200' 
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
              {video.isFreeShowcase ? 'Free Showcase Lecture' : 'Curriculum Video'}
            </span>
            <span className="text-xs text-slate-600 truncate">
              {video.subject} · {video.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
            aria-label="Close lecture"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 flex-1">
          
          {/* Simulated Video Player Screen */}
          <div className="relative aspect-video w-full rounded-xl bg-slate-900 overflow-hidden flex flex-col justify-between p-3.5 sm:p-6 text-white shadow-md group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Video Header & Tag */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-[10px] sm:text-xs font-semibold text-slate-200">
                <Video className="w-3 h-3 text-[#FF4F4F]" />
                <span>Clinical Demonstration</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-mono flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Center Play/Pause Trigger */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-2 sm:space-y-3">
              {video.isFreeShowcase ? (
                <>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF4F4F] hover:bg-[#E03E3E] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                  </button>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    {isPlaying ? 'Lecture Streaming (Synchronized Slides & Audio)' : 'Click to Play Free Showcase Lecture'}
                  </p>
                </>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center mx-auto">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="text-center space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Full Video Enrolled Content</h4>
                    <p className="text-xs text-slate-300 max-w-sm">
                      This lecture is part of the complete curriculum for {video.category === 'mbbs' ? '2nd Year MBBS' : 'NEET-PG / INI-CET'}.
                    </p>
                    <button
                      onClick={onOpenAuth}
                      className="mt-2 px-4 py-2 rounded-lg bg-[#FF4F4F] hover:bg-[#E03E3E] text-white text-xs font-bold shadow-sm cursor-pointer transition-colors active:scale-98"
                    >
                      Unlock Curriculum Access
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Player Bottom Controls Bar */}
            <div className="relative z-10 space-y-1.5">
              <div className="w-full bg-slate-700 h-1 sm:h-1.5 rounded-full overflow-hidden">
                <div className={`h-full bg-[#FF4F4F] transition-all duration-300 ${isPlaying ? 'w-2/5' : 'w-0'}`} />
              </div>
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-300 font-mono">
                <span>{isPlaying ? '07:32' : '00:00'} / {video.duration}</span>
                <span className="flex items-center gap-1.5 font-sans">
                  <Volume2 className="w-3 h-3 text-slate-400" />
                  <span>1080p HD</span>
                </span>
              </div>
            </div>
          </div>

          {/* Title and Speaker Details */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-4 sm:pb-5">
            <div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Faculty: <strong className="text-slate-900">{video.instructor}</strong> · {video.instructorTitle}
              </p>
            </div>

            {video.slideDeckIncluded && (
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-[#FF4F4F] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start"
              >
                <Download className="w-3.5 h-3.5 text-[#FF4F4F]" />
                <span>{downloaded ? 'Slide Deck Downloaded!' : 'Download Slides (.PDF)'}</span>
              </button>
            )}
          </div>

          {/* High-Yield Key Points Covered */}
          <div className="space-y-2 sm:space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#FF4F4F]" />
              <span>Key Concept Takeaways Covered in this Video:</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {video.keyPoints.map((pt, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-normal">{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};