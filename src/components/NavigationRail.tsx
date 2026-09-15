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
  return (
    <nav aria-label="음식 바로가기 목록" className="w-full bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-stone-700 tracking-tight flex items-center gap-1.5">
            <span>🗺️</span>
            <span>한눈에 골라보는 세계 명절 음식 지도</span>
          </h3>
          <span className="text-[11px] text-stone-400">
            원하는 음식을 누르면 바로 이동해요
          </span>
        </div>

        {/* Section 1: 새해 명절 음식 (1~7) */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
              🌅 1부: 새해 명절 음식 (1~7)
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {foods.slice(0, 7).map((f, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={f.id}
                  id={`nav-food-${f.id}`}
                  onClick={() => onSelectFood(idx)}
                  className={`flex flex-col items-center text-center p-2 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs scale-102 ring-2 ring-amber-300'
                      : 'bg-stone-50 hover:bg-amber-50/50 text-stone-700 border-stone-200'
                  }`}
                >
                  <span className="text-lg leading-none mb-1">{f.flagEmoji}</span>
                  <span className="font-semibold truncate w-full">{f.foodName}</span>
                  <span className={`text-[10px] truncate w-full ${isSelected ? 'text-amber-100' : 'text-stone-400'}`}>
                    {f.countryName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: 추수 명절 음식 (8~12) */}
        <div className="pt-2 border-t border-stone-100">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
              🌾 2부: 추수 명절 음식 (8~12)
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {foods.slice(7).map((f, relIdx) => {
              const actualIdx = relIdx + 7;
              const isSelected = actualIdx === currentIndex;
              return (
                <button
                  key={f.id}
                  id={`nav-food-${f.id}`}
                  onClick={() => onSelectFood(actualIdx)}
                  className={`flex flex-col items-center text-center p-2 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs scale-102 ring-2 ring-emerald-300'
                      : 'bg-stone-50 hover:bg-emerald-50/50 text-stone-700 border-stone-200'
                  }`}
                >
                  <span className="text-lg leading-none mb-1">{f.flagEmoji}</span>
                  <span className="font-semibold truncate w-full">{f.foodName}</span>
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
