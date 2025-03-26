import express from 'express';
import prisma from '../prisma';

const router = express.Router();

// Get all users
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { id: Number(id) }});
        if (!user) return res.status(404).json({ error: 'Uder not found' });
        res.json(user);
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get latest post
router.get('/posts/latest', async (req, res) => {
    try {
        const latestPost = await prisma.post.findFirst({
            orderBy: {
            createdAt: 'desc'
            }
        });
        if (!latestPost) return res.status(404).json({ error: 'No posts found' });
        res.json(latestPost);
    }   catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Get Quick Stats (for that month)
router.get('/stats/quick', async (req, res) => {
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
        const weightDiff = initialWeight.weight - currentWeight.weight;

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
})