import React, { useState } from 'react';
import { X, Award, CheckCircle, AlertCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/foodsData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToFood: (foodId: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onJumpToFood,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                초등 3학년 명절 음식 척척박사 퀴즈!
              </h3>
              <p className="text-xs text-amber-100">
                우리가 배운 세계 명절 음식 이야기를 퀴즈로 맞춰봐요
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isFinished ? (
            <div>
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                <span className="font-bold text-amber-800">
                  문제 {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-medium">
                  현재 점수: <strong className="text-stone-900">{score}개 맞힘</strong>
                </span>
              </div>

              <div className="w-full bg-stone-100 h-2 rounded-full mb-5 overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div className="mb-5">
                <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';

                  if (showExplanation) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-200';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                    } else {
                      btnStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={showExplanation}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white border border-stone-300 text-stone-700 text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showExplanation && idx === currentQ.correctIndex && (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {showExplanation && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {showExplanation && (
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 mb-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                    <span>💡 정답 해설:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {showExplanation && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>
                    {currentQuestionIndex + 1 < QUIZ_QUESTIONS.length ? '다음 문제 풀기' : '결과 확인하기!'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 text-3xl">
                🏆
              </div>
              <h4 className="text-xl font-extrabold text-stone-900 mb-2">
                퀴즈를 모두 마쳤어요!
              </h4>
              <p className="text-sm text-stone-600 mb-4">
                총 {QUIZ_QUESTIONS.length}문제 중{' '}
                <strong className="text-amber-600 text-lg">{score}개</strong>를 맞혔어요!
              </p>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-700 mb-6">
                {score === 5
                  ? '와우, 만점이에요! 당신은 세계 명절 음식 최고 박사님이에요! 🌟'
                  : score >= 3
                  ? '훌륭해요! 세계 여러 나라의 명절 음식 이야기를 아주 잘 기억하고 있네요! 👏'
                  : '잘했어요! 앞의 음식 이야기들을 다시 한 번 천천히 읽어보면 다 맞힐 수 있어요! 😊'}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <button
                  onClick={handleRestart}
                  className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-700 text-sm font-bold flex items-center justify-center gap-1.5 hover:bg-stone-50"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>다시 풀기</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-amber-500 text-white text-sm font-bold hover:bg-amber-600"
                >
                  음식 이야기로 돌아가기
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
