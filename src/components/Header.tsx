import React from 'react';
import { Sparkles, HelpCircle, Volume2, VolumeX, Type } from 'lucide-react';
import { FoodCategory } from '../types';

interface HeaderProps {
  currentCategory: FoodCategory;
  onSelectCategory: (cat: FoodCategory) => void;
  currentIndex: number;
  totalFoods: number;
  isLargeFont: boolean;
  onToggleFontSize: () => void;
  onOpenQuiz: () => void;
  isSpeaking: boolean;
  onStopSpeech: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  currentIndex,
  totalFoods,
  isLargeFont,
  onToggleFontSize,
  onOpenQuiz,
  isSpeaking,
  onStopSpeech,
}) => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-amber-200/80 sticky top-0 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white text-xl shadow-sm shadow-amber-500/20">
              🍲
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  초등 3학년 사회 & 문화
                </span>
                <span className="text-xs text-stone-500 hidden sm:inline">
                  세계 여러 나라의 전통 명절
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                세계의 명절 음식 탐험
              </h1>
            </div>
          </div>

          {/* Category Tabs: New Year vs Harvest */}
          <div className="flex items-center bg-stone-100/90 p-1 rounded-xl border border-stone-200/70 text-xs sm:text-sm font-medium">
            <button
              id="tab-new-year"
              onClick={() => onSelectCategory('new_year')}
              className={`px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                currentCategory === 'new_year'
                  ? 'bg-white text-amber-900 font-bold shadow-xs border border-amber-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>🌅</span>
              <span>1부 새해 음식</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">
                1~11
              </span>
            </button>
            <button
              id="tab-harvest"
              onClick={() => onSelectCategory('harvest')}
              className={`px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                currentCategory === 'harvest'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs border border-emerald-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>🌾</span>
              <span>2부 추수 명절 음식</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                12~17
              </span>
            </button>
          </div>

          {/* Utilities: Voice, Font size, Quiz */}
          <div className="flex items-center gap-2">
            {isSpeaking && (
              <button
                onClick={onStopSpeech}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-medium border border-rose-200 hover:bg-rose-100 transition-colors animate-pulse"
                title="음성 읽기 멈추기"
              >
                <VolumeX className="w-4 h-4" />
                <span>읽기 중지</span>
              </button>
            )}

            <button
              id="btn-font-size"
              onClick={onToggleFontSize}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isLargeFont
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
              title="글자 크기 조절"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{isLargeFont ? '글자 보통' : '글자 크게'}</span>
            </button>

            <button
              id="btn-open-quiz"
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>음식 퀴즈 놀이</span>
            </button>
          </div>

        </div>

        {/* Top Progress bar */}
        <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">
              {currentIndex + 1} / {totalFoods}번째 이야기
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-600">
              {currentCategory === 'new_year' ? '새해를 맞이하며 먹는 음식' : '가을 수확에 감사하며 먹는 음식'}
            </span>
          </div>
          <div className="w-28 sm:w-44 h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                currentCategory === 'new_year' ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${((currentIndex + 1) / totalFoods) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
