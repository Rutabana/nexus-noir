import express from "express";
import prisma from "../prisma";
import { z } from 'zod';
import { 
    getLastest500ActivityRecordsSchema,
    getRecentWorkoutsSchema
    } from '../util/validationSchemas.ts';


const router = express.Router();

/**
 * GET /heatmap/
 *
 * Retrieves up to the latest 500 activity records for a specified user and activity type.
 *
 * This endpoint expects the following query parameters:
 * - uid: The user ID.
 * - type: The activity type (e.g., 'workout', 'calorie_deficit', 'reading', 'coding').
 *
 * Workflow:
 * 1. Validate the query parameters using `getLatest500ActivityRecords`.
 * 2. If `uid` is missing, return a 401 Unauthorized response.
 * 3. If `type` is missing, return a 400 Bad Request response.
 * 4. Query the database for activity records matching the user and type, ordered by creation date (descending).
 * 5. Limit the results to 500 records using Prisma's `take` option.
 * 6. If no records are found, return a 404 Not Found response.
 * 7. Otherwise, return the records as JSON.
 *
 * Possible Status Codes:
 * @throws {200} OK: Successfully retrieved the activity records.
 * @throws{400} Bad Request: The `type` parameter is missing.
 * @throws{401} Unauthorized: The `uid` is missing or invalid.
 * @throws{404} Not Found: No activity records were found for the given user and type.
 * @throws{500} Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects `uid` and `type` in req.query.
 * @param {import('express').Response} res - The HTTP response object.
 */
router.get('/heatmap', async (req, res) => {
    try {
        const validatedData = getLastest500ActivityRecordsSchema.parse(req.query);
        const uid = validatedData.uid;
        const type = validatedData.type;

        if (!uid)
            return res.status(401).json({ error: 'Unauthorized' });
        if (!type)
            return res.status(400).json({ error: 'Specify workout type' })

        const records = prisma.activity.findMany({
            where: { 
                userId: Number(uid),
                type: type
            },
            orderBy: { createdAt: 'desc' },
            take: 500
        });
        if (records.length === 0)
            return res.status(404).json({ error: 'No records found' });

        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * GET /recent-workouts
 *
 * Retrieves a specified number of the most recent workout activity records for a given user.
 *
 * This endpoint expects the following query parameters:
 * - uid: The user ID.
 * - type: The activity type (e.g., 'workout', 'run', 'cycling').
 * - count: The number of recent records to retrieve.
 *
 * Workflow:
 * 1. Validate the query parameters using `getRecentWorkoutsSchema`.
 * 2. If `uid` is missing, return a 401 Unauthorized response.
 * 3. If `type` is missing, return a 400 Bad Request response.
 * 4. If `count` is missing, return a 400 Bad Request response.
 * 5. Query the database for activity records matching the provided `userId` and `type`,
 *    ordered by `createdAt` in descending order, limiting the results to the specified `count`.
 * 6. If no records are found, return a 404 Not Found response.
 * 7. Otherwise, return the records as a JSON response.
 *
 * Possible Status Codes:
 * @throws {200} OK: Successfully retrieved the workout records.
 * @throws {400} Bad Request: The `type` or `count` parameter is missing.
 * @throws {401} Unauthorized: The `uid` parameter is missing.
 * @throws {404} Not Found: No workout records were found for the given user and type.
 * @throws {500} Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects `uid`, `type`, and `count` in req.query.
 * @param {import('express').Response} res - The HTTP response object.
 */

router.get('/recent-workouts', async (req, res) => {
    try {
        const validatedData = getRecentWorkoutsSchema.parse(req.query);
        const uid = validatedData.uid;
        const type = validatedData.type;
        const count = validatedData.count;

        if (!uid)
            return res.status(401).json({ error: 'Unauthorized' });
        if (!type)
            return res.status(400).json({ error: 'Specify activity type' })
        if (!count)
            return res.status(400).json({ error: 'Specify quantity required' })

        const records = await prisma.activity.findMany({
            where: { 
                userId: Number(uid),
                type: type
            },
            orderBy: { createdAt: 'desc' },
            take: Number(count)
        });

        if (records.length === 0)
            return res.status(404).json({ error: 'No records found' })
        
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
