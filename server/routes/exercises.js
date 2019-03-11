import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  const exercises =
  [
    {
        "name": "pull ups",
        "reps": 5,
    },
    {
        "name": "push ups",
        "reps": 20,
    },
  ]

  res.send(exercises);
});

module.exports = router;
