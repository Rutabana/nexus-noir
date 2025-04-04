import express from 'express';
import prisma from '../prisma';
import { z } from 'zod';
import { 
    getPostSchema,
    postPostSchema
} from '../util/validationSchemas.ts'

const router = express.Router();

/**
 * GET /latest
 *
 * Retrieves the lastest post for a given userId
 * This endpoint expects the user ID to be provided as a query parameter (uid).
 * The function validates the request using getLatestPostSchema. If uid is missing
 * or invalid, it returns a 401 Unauthorized response.
 *
 * Workflow:
 * 1. Validate the query parameters using getLatestPostSchema.
 * 2. Check if uid is present; if not, return 401 Unauthorized.
 * 3. Query the database for posts associated with the user, ordering them in
 *    descending order by creation date.
 * 4. If no posts are found, return 404 Not Found.
 * 5. Otherwise, return the most recent post as JSON.
 *
 * Possible Status Codes:
 * - 200 OK: Successfully retrieved the latest post.
 * - 401 Unauthorized: The uid is missing or invalid.
 * - 404 Not Found: No posts were found for the provided uid.
 * - 500 Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects uid in req.query.
 * @param {import('express').Response} res - The HTTP response object.
 */
router.get('/latest', async (req, res) => {
    try {
        const validatedData = getPostSchema.parse(req.query);
        const uid = validatedData.uid;
        if (!uid) 
            return res.status(401).json({ error: 'Unauthorized' });

        const posts = await prisma.post.findMany({
            where: { userId: Number(uid) },
            orderBy: { createdAt: 'desc' }
        });
        if (posts.length === 0)
            return res.status(404).json({ error: 'No posts found' });

        res.json(posts[0]);
    }   catch (err) {
        res.status(500).json({error: err.message})
    }
});

/**
 * GET /all
 *
 * Retrieves all posts for a given user.
 *
 * This endpoint expects the user ID (`uid`) as a query parameter, which is validated using
 * `getPostSchema`. The workflow is as follows:
 * 
 * 1. Validate the query parameters using `getPostSchema`.
 * 2. Check if `uid` is present; if not, return a 401 Unauthorized response.
 * 3. Query the database for posts associated with the specified user ID, ordering them by `createdAt`
 *    in descending order.
 * 4. If no posts are found, return a 404 Not Found response.
 * 5. Otherwise, return the list of posts as JSON.
 *
 * Possible Status Codes:
 * - 200 OK: Posts were successfully retrieved.
 * - 401 Unauthorized: The `uid` is missing or invalid.
 * - 404 Not Found: No posts were found for the given user.
 * - 500 Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects a query parameter `uid`.
 * @param {import('express').Response} res - The HTTP response object.
 */
router.get('/all', async (req, res) => {
    try {
        const validatedData = getPostSchema.parse(req.query);
        const uid = validatedData.uid;
        if (!uid) return(401).json({ error: 'Unauthroized'});

        const posts = await prisma.post.findMany({
            where: { userId: uid },
            orderBy: { createdAt: 'desc' }
        });
        if (posts.length === 0)
            return res.status(404).json({ error: 'No posts found' });

        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * GET /random
 *
 * Retrieves a random post for a specified user.
 *
 * This endpoint expects the following query parameters:
 * - uid: The user ID.
 *
 * Workflow:
 * 1. Validate the query parameters using `getPostSchema`.
 * 2. If `uid` is missing, return a 401 Unauthorized response.
 * 3. Query the database for all posts associated with the given user.
 * 4. If no posts are found, return a 404 Not Found response.
 * 5. Select a random post from the retrieved posts.
 * 6. Return the random post as a JSON response.
 *
 * Possible Status Codes:
 * @throws {200} OK: Successfully retrieved a random post.
 * @throws {401} Unauthorized: The `uid` parameter is missing.
 * @throws {404} Not Found: No posts were found for the given user.
 * @throws {500} Internal Server Error: An unexpected error occurred.
 *
 * @param {import('express').Request} req - The HTTP request object. Expects `uid` in req.query.
 * @param {import('express').Response} res - The HTTP response object.
 */
router.get('/random', async(req, res) => {
    try{
        const validatedData = getPostSchema.parse(req.query);
        const uid = validatedData.uid;
        if (!uid)
            return res.status(401).json({ error: 'Unauthorized' });

        const posts = prisma.post.findMany({
            where: { userId: Number(uid) }
        });
        if (posts.length === 0)
            return res.status(404).json({ error: 'No posts found' });

        const rand = Math.floor(Math.random() * posts.length);
        res.json(posts[rand]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/post', async(req, res) => {
    try {
        const validatedData = postPostSchema.parse(req.body);
        const uid = validatedData.uid;
        const title = validatedData.title;
        const content = validatedData.content;
        const coverImage = validatedData.coverImage || "";
        const tags = validatedData.tags;

        if (!uid)
            return res.status(401).json({ error: "Unauthorized" });
        if (title === "")
            return res.status(400).json({ error: "Title required" })
        if (content === "")
            return res.status(400).json({ error: "Content required" })

        // TODO: Fetch tags


    }
})
