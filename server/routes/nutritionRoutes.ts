import express from "express";
import prisma from "../prisma";

const router = new express.Router();

// Get Calories In vs Calories Out (last 3 days)
router.get('/calories/last-three-days', async (req, res) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 2); // 3 days inclusive
    
    try {
        // 1. Get calorie records
        const records = await prisma.macros.findMany({
            where: {
                userId: req.user?.id, // Authentication check
                date: {
                    gte: startDate,
                    lte: today
                }
            },
            orderBy: { date: 'asc' },
            select: {
                caloriesIn: true,
                caloriesOut: true,
                date: true
            }
        });

        // 2. Create date map with tuple values
        const calorieMap = new Map<string, [number, number]>();
        records.forEach(record => {
            const dateKey = record.date.toISOString().split('T')[0];
            const out = record.caloriesOut || 0;
            calorieMap.set(dateKey, [record.caloriesIn, out]);
        });

        // 3. Generate 3-day array (oldest first)
        const calorieData: [number, number][] = [];
        const currentDate = new Date(startDate);
        
        for (let i = 0; i < 3; i++) {
            const dateKey = currentDate.toISOString().split('T')[0];
            calorieData.push(calorieMap.get(dateKey) || [0, 0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        res.json(calorieData);
    } catch (err) {
        res.status(500).json({ 
            error: err instanceof Error ? err.message : 'Unknown error' 
        });
    }
});

// Get latest complete macro breakdown
router.get('/macros/latest', async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });

    try {
        // Get the most recent day with all macros tracked
        const latestMacros = await prisma.macros.findFirst({
            where: {
                userId: req.user.id,
                AND: [
                    { protein: { not: undefined } },
                    { carbs: { not: undefined } },
                    { fat: { not: undefined } }
                ]
            },
            orderBy: {
                date: 'desc'
            },
            select: {
                protein: true,
                carbs: true,
                fat: true,
                date: true
            }
        });

        if (!latestMacros) {
            return res.status(404).json({ error: 'No complete macro data found' });
        }

        // Convert Decimal values to numbers if using Prisma Decimal type
        const response = {
            proteins: Number(latestMacros.protein),
            carbs: Number(latestMacros.carbs),
            fats: Number(latestMacros.fat),
            date: latestMacros.date
        };

        res.json(response);
    } catch (err) {
        res.status(500).json({ 
            error: err instanceof Error ? err.message : 'Unknown error' 
        });
    }
});