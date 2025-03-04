// components/types.ts

export interface Macros {
    protein: number;
    carbs: number;
    fat: number;
  }
  
  export interface DailyEntry {
    date: string;
    weight: number;      // lbs or kg
    workouts: string;    // textual description
    caloriesIn: number;
    caloriesOut: number;
    macros: Macros;      // protein, carbs, fat
  }
  