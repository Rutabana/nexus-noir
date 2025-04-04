import express from "express";
import prisma from "../prisma";
import { z } from 'zod';
import { getRandomCurrentlyReadingBook } from '../util/validationSchemas.ts';

const router = express.Router();

/**
 * GET /currently-reading
 *
 * Retrieves a random book from the user's library that has been read in the last 7 days.
 *
 * This endpoint expects the user ID (`uid`) in the request body, which is validated using
 * `getRandomCurrentlyReadingBookSchema`. The function then:
 *
 * 1. Retrieves the user (including their `library`) from the database.
 * 2. Filters the user's library for books that have a `lastRead` date within the past 7 days.
 * 3. If no such books are found, it returns a 404 Not Found response.
 * 4. Otherwise, it selects a random book from the filtered list and returns it as JSON.
 *
 * Possible Status Codes:
 * - 200 OK: Successfully retrieved a random book from the currently reading list.
 * - 404 Not Found: If either the user is not found or no books in the library meet the criteria.
 * - 500 Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects a uid in the request body.
 * @param {import('express').Response} res - The HTTP response object.
 */
router.get('/currently-reading', async (req, res) => {
    try {
        const validatedData = getRandomCurrentlyReadingBookSchema.parse(req.body);
        const uid = validatedData.uid;
        const user = await prisma.user.findUnique({
            where: { id: uid },
            include: { library: true }, // Include the user's library
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const books = user.library.filter(book => {
            const lastReadDate = book.lastRead ? new Date(book.lastRead) : null;
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            return lastReadDate !== null && lastReadDate >= sevenDaysAgo;
        });

        if (books.length === 0) {
            return res.status(404).json({ error: 'No books found in currently reading' });
        }

        const randomBook = books[Math.floor(Math.random() * books.length)];
        return res.json(randomBook);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
