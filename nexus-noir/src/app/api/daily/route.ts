// app/api/daily/route.ts

import { NextResponse } from 'next/server';

interface DailyEntry {
  date: string;      // e.g., "2025-03-05"
  workouts: string;  // e.g., "Ran 5km"
  calories: number;  // e.g., 2100
  notes?: string;    // optional notes
}

// In-memory mock data
let dailyData: DailyEntry[] = [
  {
    date: '2025-03-01',
    workouts: '30 min strength training',
    calories: 2000,
    notes: 'Felt great today!',
  },
  {
    date: '2025-03-02',
    workouts: 'Ran 5km',
    calories: 2200,
    notes: 'Ran in the evening, perfect weather.',
  },
];

// GET handler: Return the existing daily data
export async function GET() {
  return NextResponse.json(dailyData);
}

// POST handler: Add a new daily entry
export async function POST(request: Request) {
  const body = await request.json();
  const newEntry: DailyEntry = {
    date: body.date,
    workouts: body.workouts,
    calories: body.calories,
    notes: body.notes,
  };
  dailyData.push(newEntry);
  return NextResponse.json({ message: 'Entry added', newEntry });
}
