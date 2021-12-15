import { Router } from 'express';
import { findSourceMap } from 'module';
import {getConnection, Like} from 'typeorm';
import { User } from '../entities/User';

const router = Router();

router.get('/', async (req, res) => {
  const connection = getConnection();

  const users = await connection.manager.find(User, {
    where: {
      id: 3,
      username: Like('dar%'),
    }
  });
  console.log(users);

  res.send(users);	
});

export default router;