import express from 'express';
import { index, create, update, destroy } from './controller';

const router = express.Router();

router.route('/').get(index);
router.route('/').post(create);
router.route('/:id').put(update);
router.route('/:id').delete(destroy);

export default router;
