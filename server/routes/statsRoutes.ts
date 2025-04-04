/**
 * @fileoverview This file defines the routes for retrieving statistical data and weight records
 * for the current month and the last 30 days. It uses Prisma for database interactions and Express
 * for handling HTTP requests.
 */
import express from "express";
import prisma from "../prisma";

const router = new express.Router();


/**
 * @route GET /quick
 * @description Retrieves quick statistics for the current month, including the number of posts,
 * workouts, books completed, and weight loss. Weight loss is calculated as the difference between
 * the first and last recorded weights for the month.
 * 
 * @access Protected - Requires the user to be authenticated.
 * 
 * @returns {Object} JSON object containing:
 * - `posts` (number): The count of posts created in the current month.
 * - `workouts` (number): The count of workouts logged in the current month.
 * - `books` (number): The count of books completed in the current month.
 * - `weight_loss` (number): The difference between the initial and current weight for the month.
 * 
 * @throws {401} If the user is not authenticated.
 * @throws {404} If weight records or stats are not found or incomplete.
 * @throws {500} If an internal server error occurs.
 */

/**
 * @route GET /weight/last-month
 * @description Retrieves the weight records for the last 30 days. The response includes a daily
 * weight log, where missing days are filled with a weight value of 0.
 * 
 * @access Public
 * 
 * @returns {Array<number>} An array of 30 numbers representing the weight log for the last 30 days.
 * Each index corresponds to a day, starting from 29 days ago to today.
 * 
 * @throws {500} If an internal server error occurs.
 */
router.get('/quick', async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        const firstDayEnd = new Date(startOfMonth);
        firstDayEnd.setHours(23, 59, 59)

        // Parallelizing queries
        const [posts, workouts, books, weightRecords] = await Promise.all([
            prisma.post.count({ 
                where: { 
                    createdAt: {
                        gte: startOfMonth,
                        lte: endOfMonth
                    }
                }
            }),
            prisma.activity.count({ 
                where: { 
                    type: 'workout',
                    createdAt: {
                        gte: startOfMonth,
                        lte: endOfMonth
                    }
            } 
            }),
            prisma.book.count({
                where: {
                    completedAt: {
                        gte: startOfMonth,
                        lte: endOfMonth
                    }
                }
            }),
            prisma.healthRecord.findMany({
                where: {
                recordedAt: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0),
                    lte: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 23, 59, 59)
                },
                weight: {
                    not: null
                }
                },
                orderBy: {
                recordedAt: 'asc'
                }
            })
        ]);

        if (!weightRecords) {
            return res.status(404).json({ error: 'Weight records not found' });
        }
        const initialWeight = weightRecords[0];
        const currentWeight = weightRecords[weightRecords.length - 1];

        if (!initialWeight || !currentWeight) {
            return res.status(404).json({ error: 'Weight records not found' });
        }
        if (initialWeight.weight === null || currentWeight.weight === null) {
            return res.status(404).json({ error: 'Weight records are incomplete' });
        }
        const weightDiff = Number(initialWeight.weight) - Number(currentWeight.weight);

        const stats = {
            posts: posts || 0,
            workouts: workouts || 0,
            books: books || 0,
            weight_loss: weightDiff || 0
        }

        if (!stats) return res.status(404).json({ error: 'Stats not found'});
        res.json(stats);
    }   catch (err) {
        res.status(500).json({ error: err.message})
    }
});

/**
 * GET /weight/last-month
 *
 * Retrieves the daily weight records for the last 30 days.
 *
 * This endpoint performs the following steps:
 * 1. Calculates a 30-day window from the current day (today) back to 29 days ago.
 * 2. Queries the `healthRecord` table for records where `recordedAt` is between the start of the window and today.
 * 3. Orders the fetched records in ascending order by `recordedAt`.
 * 4. Selects only the `weight` and `recordedAt` fields from each record.
 * 5. Constructs a mapping of dates (in YYYY-MM-DD format) to weight values.
 * 6. Iterates over each day in the 30-day window to build an array (`weightLog`) of weight values.
 *    - If a weight record exists for a specific day, that weight is added.
 *    - If no record exists for a day, a value of 0 is added.
 * 7. Returns the array of weights as a JSON response.
 *
 * Possible Status Codes:
 * @throws {200} OK: Successfully retrieved and processed the weight records.
 * @throws {500} Internal Server Error: An unexpected error occurred while fetching or processing the records.
 *
 * @param {import('express').Request} req - The HTTP request object.
 * @param {import('express').Response} res - The HTTP response object.
 */

router.get('/weight/last-month', async (req, res) => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 29); // 30 day window
    try {
        const records = await prisma.healthRecord.findMany({
            where: {
                recordedAt: {
                    gte: start,
                    lte: today
                }
            },
            orderBy: {
                recordedAt: 'asc'
            },
            select: {
                weight: true,
                recordedAt: true
            }
        });

        const weightMap= new Map<string, number>();
        records.forEach(record => {
            const dateKey = record.recordedAt.toISOString().split('T')[0];
            weightMap.set(dateKey, Number(record.weight));
        });

        const weightLog: number[] = [];
        const currentDate = new Date(start);

        for (let i = 0; i < 30; i++) {
            const dateKey = currentDate.toISOString().split('T')[0];
            weightLog.push(weightMap.get(dateKey) || 0);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        res.json(weightLog);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

