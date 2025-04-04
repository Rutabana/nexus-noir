import { z } from 'zod';

export const createUserSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters long'),
        .regex(
            /(?=.*[!@#$%^&*(),.?":{}|<>])/,
            'Password must contain at least one special character'
        ),
        profilePicture: z.string().optional(),
        authProvider: z.enum([
            'email',
            'google',
            'github',
            'apple',
            'facebook',
            'microsoft',
            'twitter',
            'gitlab',
            'discord',
        ]),
});

export const getPostSchema = z.object({
    uid: z.number()
});

export const postPostSchema = z.object({
    uid: z.number(),
    title: z.string(),
    content: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.number())
});

export const getRandomCurrentlyReadingBookScehma = z.object({
    uid: z.number(),
    title: z.string(),
    author: z.string().optional(),
    progress: z.number().min(0).max(100).optional(),
    lastReadAt: z.date()
});

const activity_type = z.enum([
    'workout',
    'calorie_deficit',
    'reading',
    'coding'
]);

export const getLastest500ActivityRecordsSchema = z.object({
    uid: z.number(),
    type: activity_type
});

export const getRecentWorkoutsSchema = z.object({
    uid: z.number(),
    type: activity_type,
    count: z.number()
});
