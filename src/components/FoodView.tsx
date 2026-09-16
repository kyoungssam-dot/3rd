import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Calendar, Heart, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { HolidayFood } from '../types';
import { speechManager } from '../utils/speech';

interface FoodViewProps {
  food: HolidayFood;
  totalCount?: number;
  isLargeFont: boolean;
  isSpeaking: boolean;
  onSpeechToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onJumpToCategory: (category: 'new_year' | 'harvest') => void;
}

export const FoodView: React.FC<FoodViewProps> = ({
  food,
  totalCount = 17,
  isLargeFont,
  isSpeaking,
  onSpeechToggle,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  onJumpToCategory,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const isNewYear = food.category === 'new_year';
  const categoryTheme = isNewYear
    ? {
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
        heroTag: '🌅 새해 맞이 음식',
        accentColor: 'text-amber-700',
        ringColor: 'ring-amber-400',
        lightBg: 'bg-amber-50/60',
        borderAccent: 'border-amber-200',
        buttonGradient: 'from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
      }
    : {
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        heroTag: '🌾 가을 추수 명절 음식',
        accentColor: 'text-emerald-700',
        ringColor: 'ring-emerald-400',
        lightBg: 'bg-emerald-50/60',
        borderAccent: 'border-emerald-200',
        buttonGradient: 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
      };

  return (
    <>
      <article
        id={`food-page-${food.id}`}
        className="w-full bg-white rounded-3xl shadow-sm border border-stone-200/80 overflow-hidden transition-all duration-300"
      >
        {/* Category Ribbon / Top Bar */}
        <div className={`px-6 py-2.5 flex items-center justify-between border-b ${categoryTheme.borderAccent} ${categoryTheme.lightBg}`}>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded-full border shadow-xs bg-white text-stone-800">
              {categoryTheme.heroTag}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {food.orderNumber}번째 전통 음식
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
                isLiked
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-white border-stone-200 text-stone-600 hover:text-rose-500'
              }`}
              title="맛있어 보여요!"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isLiked ? '맛있겠다! ❤️' : '먹고 싶어요'}</span>
            </button>

            <button
              onClick={onSpeechToggle}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-xs transition-all ${
                isSpeaking
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-amber-400 hover:text-amber-700'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
              <span>{isSpeaking ? '음성 멈추기' : '이야기 듣기 🔊'}</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-5 sm:p-8 lg:p-10">
          {/* Title & Country Info Banner */}
          <div className="pb-6 border-b border-stone-200">
            <div className="flex flex-col gap-3">
              {/* Country Name & Holiday Name Side-by-Side in One Line */}
              <div className="flex items-center flex-wrap gap-2.5 sm:gap-4">
                {/* Country Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-stone-100 border-2 border-stone-300 text-stone-900 shadow-xs">
                  <span className="text-3xl sm:text-4xl leading-none">{food.flagEmoji}</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-stone-900 tracking-tight">
                    {food.countryName}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-stone-500">
                    ({food.continent})
                  </span>
                </div>

                {/* Holiday Name Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-amber-100/90 border-2 border-amber-300 text-amber-950 shadow-xs">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 shrink-0" />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-950 tracking-tight">
                    {food.holidayName}
                  </span>
                </div>
              </div>

              {/* Food Name (Big, Friendly, High Contrast) */}
              <div className="flex items-baseline flex-wrap gap-3 pt-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-heading">
                  {food.foodName}
                </h2>
                {food.pronunciation && (
                  <span className="text-stone-600 text-lg sm:text-xl font-bold">
                    [{food.pronunciation}]
                  </span>
                )}
                <span className="text-sm sm:text-base text-stone-400 font-medium">
                  ({food.foodOriginalName})
                </span>
              </div>
            </div>
          </div>

          {/* Catchy Kid-Friendly Headline */}
          <div className="my-5 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 flex items-center gap-3.5">
            <span className="text-2xl sm:text-3xl">✨</span>
            <p className="text-base sm:text-xl font-bold text-amber-950">
              {food.summaryHeadline}
            </p>
          </div>

          {/* 🌟 2X ENLARGED HERO PHOTO SECTION 🌟 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs sm:text-sm font-bold text-stone-700 flex items-center gap-1.5">
                <span>📸</span>
                <span>{food.countryName}의 전통 명절 음식 실물 사진</span>
              </span>
              <button
                onClick={() => setIsZoomOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-full border border-amber-300 transition-colors cursor-pointer shadow-2xs"
                title="사진을 화면 가득 크게 확대해서 보기"
              >
                <ZoomIn className="w-3.5 h-3.5 text-amber-700" />
                <span>사진 크게 확대하기</span>
              </button>
            </div>

            {/* Main Big Photo Frame: Increased from aspect-4/3 in 5-col to full-width aspect-16/10 & 480px-560px height */}
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="relative w-full h-80 sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden bg-stone-100 border-2 border-stone-200 shadow-sm group cursor-pointer"
            >
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 text-stone-400 gap-2 animate-pulse">
                  <span className="text-5xl">🥘</span>
                  <span className="text-sm font-medium">맛있는 고화질 음식 사진을 불러오는 중...</span>
                </div>
              )}

              <img
                src={food.imageUrl}
                alt={`${food.countryName}의 전통 명절 음식 ${food.foodName}`}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageLoaded(true);
                  setImageError(true);
                }}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Top Right Click to Zoom Hint Chip */}
              <div className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 transition-all shadow-md">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>클릭하면 전체 화면 확대</span>
              </div>

              {/* Floating Caption & Flag Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm flex items-center justify-between border border-white/15 shadow-lg">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="text-2xl shrink-0">{food.flagEmoji}</span>
                  <span className="font-medium truncate">{food.imageCaption}</span>
                </div>
                <span className="text-amber-300 font-bold shrink-0 ml-2 text-xs bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/30">
                  {food.foodName}
                </span>
              </div>
            </div>
          </div>

          {/* Full-width Story & Curious Fact Sections (Removed keySymbols & greetings per request) */}
          <div className="space-y-6">
            
            {/* Main "명절에 먹게 된 이유" Section Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/90 shadow-xs">
              <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg sm:text-xl font-extrabold shadow-xs">
                    Q
                  </div>
                  <h3 className={`font-extrabold text-stone-900 tracking-tight ${isLargeFont ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    왜 이 명절에 {food.foodName}을(를) 먹게 되었을까요?
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 shrink-0">
                  궁금증 쏙쏙
                </span>
              </div>

              {/* Story Paragraphs */}
              <div className={`space-y-4 text-stone-800 leading-relaxed ${isLargeFont ? 'text-xl' : 'text-base sm:text-lg'}`}>
                {food.reasons.map((paragraph, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                    <p className="font-medium">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3rd Grader Curious Fact Box (돋보기 상식) */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-7 rounded-3xl border-2 border-orange-200/90 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl sm:text-3xl">🔍</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-orange-950">
                  알고 나면 더 재미있는 3학년 돋보기 상식!
                </h4>
              </div>
              <p className={`text-stone-800 leading-relaxed font-medium ${isLargeFont ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
                {food.funFact}
              </p>
            </div>

          </div>

          {/* Bottom Page Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="btn-prev-food"
              onClick={onPrev}
              disabled={!hasPrev}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border transition-all ${
                hasPrev
                  ? 'bg-white border-stone-300 text-stone-800 hover:bg-stone-50 hover:border-amber-400 active:scale-95 shadow-xs'
                  : 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <span>←</span>
              <span>이전 음식 보기</span>
            </button>

            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold text-stone-600">
                현재 <strong className="text-amber-700 font-extrabold text-sm sm:text-base">{food.orderNumber}</strong> / {totalCount}번째 음식
              </span>
            </div>

            <button
              id="btn-next-food"
              onClick={onNext}
              disabled={!hasNext}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-white shadow-xs transition-all active:scale-95 bg-gradient-to-r ${categoryTheme.buttonGradient} ${
                !hasNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span>다음 음식 보기</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </article>

      {/* 🔍 FULLSCREEN ZOOM MODAL (사진 크게 보기 모달) */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="w-full flex items-center justify-between text-white pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{food.flagEmoji}</span>
                  <h3 className="font-bold text-lg sm:text-xl">
                    {food.foodName} <span className="text-stone-300 font-normal text-sm">({food.countryName})</span>
                  </h3>
                </div>
                <button
                  onClick={() => setIsZoomOpen(false)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  title="닫기"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="w-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                <img
                  src={food.imageUrl}
                  alt={`${food.countryName}의 ${food.foodName}`}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
              </div>

              <div className="mt-3 text-center text-stone-300 text-sm bg-black/50 px-4 py-2 rounded-xl border border-white/10">
                <p>{food.imageCaption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

