/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HOLIDAY_FOODS } from './data/foodsData';
import { FoodCategory, HolidayFood } from './types';
import { Header } from './components/Header';
import { FoodView } from './components/FoodView';
import { NavigationRail } from './components/NavigationRail';
import { QuizModal } from './components/QuizModal';
import { speechManager } from './utils/speech';
import { Sparkles, ArrowRight, BookOpen, Compass } from 'lucide-react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeFont, setIsLargeFont] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showCategoryTransitionNotice, setShowCategoryTransitionNotice] = useState(false);

  const currentFood = HOLIDAY_FOODS[currentIndex];
  const currentCategory: FoodCategory = currentFood.category;

  // Listen to speech synthesis state
  useEffect(() => {
    const unsubscribe = speechManager.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      unsubscribe();
      speechManager.stop();
    };
  }, []);

  // Boundary indices
  const firstHarvestIndex = HOLIDAY_FOODS.findIndex((f) => f.category === 'harvest');
  const lastNewYearIndex = firstHarvestIndex > 0 ? firstHarvestIndex - 1 : 0;

  // Stop speech when changing food page
  const changeFoodIndex = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= HOLIDAY_FOODS.length) return;
      speechManager.stop();

      // Show notice if moving from last New Year food to first Harvest food
      if (currentIndex === lastNewYearIndex && newIndex === firstHarvestIndex) {
        setShowCategoryTransitionNotice(true);
      } else {
        setShowCategoryTransitionNotice(false);
      }

      setCurrentIndex(newIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [currentIndex, lastNewYearIndex, firstHarvestIndex]
  );

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isQuizOpen) return;
      if (e.key === 'ArrowRight') {
        if (currentIndex < HOLIDAY_FOODS.length - 1) {
          changeFoodIndex(currentIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          changeFoodIndex(currentIndex - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isQuizOpen, changeFoodIndex]);

  // Handle category tab click
  const handleSelectCategory = (category: FoodCategory) => {
    if (category === 'new_year') {
      changeFoodIndex(0);
    } else {
      changeFoodIndex(firstHarvestIndex);
    }
  };

  // Toggle narration
  const handleSpeechToggle = () => {
    if (isSpeaking) {
      speechManager.stop();
    } else {
      const textToSpeak = `${currentFood.countryName}의 명절 ${currentFood.holidayName}에 먹는 ${currentFood.foodName} 이야기입니다. ${currentFood.summaryHeadline} ${currentFood.reasons.join(' ')} 알고 나면 더 재미있는 돋보기 상식: ${currentFood.funFact}`;
      speechManager.speak(textToSpeak);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-stone-800">
      {/* Top Header & Global Status */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        currentIndex={currentIndex}
        totalFoods={HOLIDAY_FOODS.length}
        isLargeFont={isLargeFont}
        onToggleFontSize={() => setIsLargeFont(!isLargeFont)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        isSpeaking={isSpeaking}
        onStopSpeech={() => speechManager.stop()}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl xl:max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6">
        
        {/* Category Transition Notice (Appears when moving from New Year to Harvest) */}
        {showCategoryTransitionNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 flex items-center justify-between gap-4 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌾</span>
              <div>
                <h4 className="font-bold text-sm sm:text-base">
                  새해 음식을 모두 살펴보았어요! 이제 2부 추수 명절 음식 이야기로 이어집니다.
                </h4>
                <p className="text-xs text-emerald-800">
                  가을에 수확한 곡식과 과일에 감사하며 나누어 먹는 세계의 추수 명절 음식들을 만나보세요!
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCategoryTransitionNotice(false)}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50 shrink-0"
            >
              확인
            </button>
          </motion.div>
        )}

        {/* The Core: Single Food Presentation per Page */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFood.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <FoodView
              food={currentFood}
              totalCount={HOLIDAY_FOODS.length}
              isLargeFont={isLargeFont}
              isSpeaking={isSpeaking}
              onSpeechToggle={handleSpeechToggle}
              onNext={() => changeFoodIndex(currentIndex + 1)}
              onPrev={() => changeFoodIndex(currentIndex - 1)}
              hasNext={currentIndex < HOLIDAY_FOODS.length - 1}
              hasPrev={currentIndex > 0}
              onJumpToCategory={handleSelectCategory}
            />
          </motion.div>
        </AnimatePresence>

        {/* Quick Jump Rail for easy classroom browsing */}
        <div className="mt-2">
          <NavigationRail
            foods={HOLIDAY_FOODS}
            currentIndex={currentIndex}
            onSelectFood={(idx) => changeFoodIndex(idx)}
          />
        </div>

        {/* Educational Guide Footer Note */}
        <footer className="mt-4 p-4 rounded-2xl bg-white border border-stone-200/80 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              초등학교 3학년 사회과 교육과정 연계: <strong>세계 여러 나라의 다양한 생활 모습과 명절 문화</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="text-amber-700 font-bold hover:underline"
            >
              🎯 척척박사 퀴즈 풀기
            </button>
            <span className="text-stone-300">|</span>
            <span>키보드 좌우(←, →) 방향키로도 책장을 넘길 수 있어요</span>
          </div>
        </footer>

      </main>

      {/* Interactive Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onJumpToFood={(foodId) => {
          const targetIndex = HOLIDAY_FOODS.findIndex((f) => f.id === foodId);
          if (targetIndex !== -1) {
            changeFoodIndex(targetIndex);
            setIsQuizOpen(false);
          }
        }}
      />
    </div>
  );
}
