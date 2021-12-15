import express, { Router } from 'express';
import cors from 'cors';
import compression from 'compression';

// routes
import mainRouter from './main.routes';
import userRouter from './user.routes';

const router = Router();
const apiRouter = Router();

console.log('[ROUTER] Loading routes');
apiRouter.use(cors())
apiRouter.use(express.json());
apiRouter.use(compression());

apiRouter.use('/main', mainRouter);
apiRouter.use('/users', userRouter);

router.use('/api', apiRouter);

export default router;