import express from 'express';
import prisma from '../prisma';
import { z } from 'zod';
import { createUserSchema } from '../util/validationSchemas.ts'

const router = express.Router();

// Create a user
router.post('/', async (req, res) => {
    try{
        // Validate the request body
        const validatedData = createUserSchema.parse(req.body);

        // TODO:In production, has the password here before storing it!
        // For example, using bcrypt:
        // const hashedPassword = await bcrypt.hash(validatedData.password, 10);

        const newUser = await prisma.user.create({
            data: {
                username: validatedData.username,
                email: validatedData.email,
                // User hashedPassword instread of raw password in a real application
                hashedPassword: validatedData.password,
                profilePicture: validatedData.profilePicture,
                authProvider: validatedData.authProvider,
            },
        });

        res.status(201).json(newUser);
    } catch (err) {
        // If the error is from Zod validation, send a 400 status with details
        if (err instanceof z.ZodError) {
            return res.status(400).json({ error: err.errors });
        }
        const.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
