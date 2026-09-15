import React from 'react';
import { HolidayFood } from '../types';

interface NavigationRailProps {
  foods: HolidayFood[];
  currentIndex: number;
  onSelectFood: (index: number) => void;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({
  foods,
  currentIndex,
  onSelectFood,
}) => {
  const newYearFoods = foods.filter((f) => f.category === 'new_year');
  const harvestFoods = foods.filter((f) => f.category === 'harvest');

  return (
    <nav aria-label="음식 바로가기 목록" className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-2xs">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-stone-800 tracking-tight flex items-center gap-1.5">
            <span>🗺️</span>
            <span>한눈에 골라보는 세계 명절 음식 지도 (총 {foods.length}가지)</span>
          </h3>
          <span className="text-xs text-stone-500">
            원하는 음식을 누르면 바로 그 페이지로 이동해요!
          </span>
        </div>

        {/* Section 1: 새해 명절 음식 (1~11) */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 flex items-center gap-1">
              <span>🌅</span> 1부: 세계의 새해 명절 음식 (1~{newYearFoods.length})
            </span>
            <span className="text-[11px] text-amber-800/80 hidden sm:inline">
              새해의 복, 건강, 장수, 재물을 기원해요
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
            {newYearFoods.map((f) => {
              const actualIdx = foods.findIndex((item) => item.id === f.id);
              const isSelected = actualIdx === currentIndex;
              return (
                <button
                  key={f.id}
                  id={`nav-food-${f.id}`}
                  onClick={() => onSelectFood(actualIdx)}
                  className={`flex flex-col items-center text-center p-2 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs scale-102 ring-2 ring-amber-300'
                      : 'bg-stone-50 hover:bg-amber-50/70 text-stone-700 border-stone-200 hover:border-amber-200'
                  }`}
                >
                  <span className="text-lg leading-none mb-1">{f.flagEmoji}</span>
                  <span className="font-semibold truncate w-full text-[11px] sm:text-xs">{f.foodName}</span>
                  <span className={`text-[10px] truncate w-full ${isSelected ? 'text-amber-100' : 'text-stone-400'}`}>
                    {f.countryName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: 추수 명절 음식 (12~17) */}
        <div className="pt-3 border-t border-stone-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 flex items-center gap-1">
              <span>🌾</span> 2부: 세계의 추수 명절 음식 ({newYearFoods.length + 1}~{foods.length})
            </span>
            <span className="text-[11px] text-emerald-800/80 hidden sm:inline">
              가을 수확과 대지의 은혜, 이웃에게 감사해요
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {harvestFoods.map((f) => {
              const actualIdx = foods.findIndex((item) => item.id === f.id);
              const isSelected = actualIdx === currentIndex;
              return (
                <button
                  key={f.id}
                  id={`nav-food-${f.id}`}
                  onClick={() => onSelectFood(actualIdx)}
                  className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs scale-102 ring-2 ring-emerald-300'
                      : 'bg-stone-50 hover:bg-emerald-50/70 text-stone-700 border-stone-200 hover:border-emerald-200'
                  }`}
                >
                  <span className="text-lg leading-none mb-1">{f.flagEmoji}</span>
                  <span className="font-semibold truncate w-full text-[11px] sm:text-xs">{f.foodName}</span>
                  <span className={`text-[10px] truncate w-full ${isSelected ? 'text-emerald-100' : 'text-stone-400'}`}>
                    {f.countryName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
