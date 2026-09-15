import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Sparkles, MapPin, Calendar, HelpCircle, Heart, CheckCircle2, Bookmark } from 'lucide-react';
import { HolidayFood } from '../types';
import { speechManager } from '../utils/speech';

interface FoodViewProps {
  food: HolidayFood;
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

      {/* Main Content: Single Food Presentation Grid */}
      <div className="p-5 sm:p-8 lg:p-10">
        {/* Title & Country Info Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center flex-wrap gap-2 mb-2">
              {/* Country Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-sm font-bold shadow-2xs">
                <span className="text-xl leading-none">{food.flagEmoji}</span>
                <span>{food.countryName}</span>
                <span className="text-xs font-normal text-stone-500">({food.continent})</span>
              </div>

              {/* Holiday Name Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{food.holidayName}</span>
              </div>
            </div>

            {/* Food Name (Big, Friendly, High Contrast) */}
            <div className="flex items-baseline flex-wrap gap-2.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight font-heading">
                {food.foodName}
              </h2>
              {food.pronunciation && (
                <span className="text-stone-500 text-sm sm:text-base font-medium">
                  [{food.pronunciation}]
                </span>
              )}
              <span className="text-xs text-stone-400">
                ({food.foodOriginalName})
              </span>
            </div>
          </div>

          {/* Holiday Date & Context */}
          <div className="text-xs sm:text-sm text-stone-500 bg-stone-50 px-3.5 py-2 rounded-xl border border-stone-200/60 max-w-sm">
            <span className="font-semibold text-stone-700">명절 안내: </span>
            {food.holidayDateInfo}
          </div>
        </div>

        {/* Catchy Kid-Friendly Headline */}
        <div className="my-5 p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 flex items-center gap-3">
          <span className="text-2xl">✨</span>
          <p className="text-base sm:text-lg font-bold text-amber-950">
            {food.summaryHeadline}
          </p>
        </div>

        {/* Responsive Two Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Food Picture + Visual Symbols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Food Image Container */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-inner group">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 text-stone-400 gap-2 animate-pulse">
                  <span className="text-4xl">🥘</span>
                  <span className="text-xs font-medium">맛있는 사진을 불러오는 중...</span>
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

              {/* Floating Country and Holiday badge over photo */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/65 backdrop-blur-md text-white p-2.5 rounded-xl text-xs flex items-center justify-between border border-white/10">
                <span className="font-medium truncate pr-2">{food.imageCaption}</span>
                <span className="text-stone-300 shrink-0 text-[11px]">사진</span>
              </div>
            </div>

            {/* Key Symbols (핵심 상징 3가지) */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
              <h4 className="text-xs font-bold text-stone-700 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                <span>3학년 눈높이 핵심 상징 포인트</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {food.keySymbols.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200/70 shadow-2xs"
                  >
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 shrink-0 mt-0.5">
                      {item.badge}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-stone-800">{item.title}</h5>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Why we eat this food ("명절에 먹게 된 이유") & Curious Fact */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Main "명절에 먹게 된 이유" Section Box */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-amber-200/90 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-amber-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">
                    Q
                  </div>
                  <h3 className={`font-bold text-stone-900 ${isLargeFont ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                    왜 이 명절에 {food.foodName}을(를) 먹게 되었을까요?
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                  궁금증 쏙쏙
                </span>
              </div>

              {/* Story Paragraphs */}
              <div className={`space-y-3.5 text-stone-700 leading-relaxed ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                {food.reasons.map((paragraph, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="font-normal">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3rd Grader Curious Fact Box (돋보기 상식) */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-5 rounded-2xl border border-orange-200/80">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔍</span>
                <h4 className="text-sm sm:text-base font-bold text-orange-950">
                  알고 나면 더 재미있는 3학년 돋보기 상식!
                </h4>
              </div>
              <p className={`text-stone-700 leading-relaxed ${isLargeFont ? 'text-base' : 'text-sm'}`}>
                {food.funFact}
              </p>
            </div>

            {/* Country Greeting Phrase Box */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-semibold mb-1">
                  <span>💬</span>
                  <span>{food.countryName}의 명절 축하 인사말을 따라 해봐요!</span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-base font-extrabold text-stone-900">
                    {food.greetingPhrase.original}
                  </span>
                  <span className="text-xs text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded-md">
                    발음: {food.greetingPhrase.pronunciation}
                  </span>
                </div>
              </div>
              <div className="text-xs text-stone-600 italic bg-white px-3 py-1.5 rounded-xl border border-stone-200/60 shrink-0">
                뜻: {food.greetingPhrase.meaning}
              </div>
            </div>

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
            <span className="text-xs font-semibold text-stone-500">
              현재 <strong className="text-stone-900 font-bold">{food.orderNumber}</strong> / 12번째 음식
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
  );
};
