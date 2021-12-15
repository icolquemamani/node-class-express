import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});

router.get('/now', (req, res) => {
  res.send({now: new Date()});
});

router.get('/name', (req, res) => {
  res.send({message: `My name is ${req.query.name}`});	
});

export default router;