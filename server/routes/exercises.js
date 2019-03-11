import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const exercises = await req.context.models.Exercise.find();
  res.send(exercises);
});

module.exports = router;
