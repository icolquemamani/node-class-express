import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});

router.get('/date', (req, res) => {
  res.send({now: new Date()});
});

export default router;