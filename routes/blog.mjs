import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req, res) => {
  res.json({ message: 'Get all blogs' });
});

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get blog with ID ${id}` });
});

export default router;
