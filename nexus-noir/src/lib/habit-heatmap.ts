// lib/habit-heatmap.ts

import { addDays, subDays, format } from 'date-fns';

export interface CompletionRecord {
  [date: string]: boolean; // e.g. "2025-03-01": true/false
}

export function getLastNDays(n: number) {
  const days: string[] = [];
  let current = new Date();
  for (let i = 0; i < n; i++) {
    days.unshift(format(current, 'yyyy-MM-dd')); // store string e.g. "2025-03-01"
    current = subDays(current, 1);
  }
  return days;
}

// Example completions for the last 28 days
export const mockCompletions: CompletionRecord = {
  '2025-03-01': true,
  '2025-03-02': false,
  '2025-03-03': true,
  // ...
};
