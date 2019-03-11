import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const exercises = await req.context.models.Exercise.find();
  res.send(exercises);
});

router.get('/:id', async (req, res) => {
  const exercise = await req.context.models.Exercise.findById(
    req.params.id,
  );
  return res.send(exercise);
});

module.exports = router;
