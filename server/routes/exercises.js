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

router.post('/', async (req, res) => {
  await req.context.models.Exercise.create({
    name: req.body.name,
    reps: req.body.reps,
  });

  return res.send();
});

router.delete('/:id', async (req, res) => {
  const exercise = await req.context.models.Exercise.findById(
    req.params.id,
  );

  if (exercise) {
    await exercise.remove();
  }

  res.send();
});

module.exports = router;
