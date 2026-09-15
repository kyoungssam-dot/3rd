export type FoodCategory = 'new_year' | 'harvest';

export interface KeySymbol {
  badge: string;
  title: string;
  desc: string;
}

export interface HolidayFood {
  id: string;
  category: FoodCategory;
  orderNumber: number;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  continent: string;
  holidayName: string;
  holidayDateInfo: string;
  foodName: string;
  foodOriginalName: string;
  pronunciation?: string;
  imageUrl: string;
  imageCaption: string;
  summaryHeadline: string;
  reasons: string[];
  keySymbols: KeySymbol[];
  funFact: string;
  greetingPhrase: {
    original: string;
    pronunciation: string;
    meaning: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  foodId: string;
}
