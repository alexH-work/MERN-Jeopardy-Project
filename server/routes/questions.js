import express from 'express';
import { getQuestion, createQuestion } from '../controllers/controller.js'
import { getPoints, createPoints, editPoints, editAllPoints } from '../controllers/pointController.js'

const router = express.Router();
router.get('/', getQuestion);
router.post('/',createQuestion);
router.get('/points', getPoints);
router.post('/points',createPoints);
router.patch('/points',editAllPoints);
router.patch('/points/:player',editPoints);
export default router;