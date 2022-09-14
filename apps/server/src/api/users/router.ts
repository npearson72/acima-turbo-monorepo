import express from 'express';
import { index, create, destroy } from './controller';

const router = express.Router();

router.route('/').get(index);
router.route('/').post(create);
router.route('/:id').delete(destroy);

export default router;
