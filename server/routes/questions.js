import express from 'express';
import { getQuestion, createQuestion } from '../controllers/controller.js'
import { getPoints, createPoints, editPoints, editAllPoints, getAllPoints } from '../controllers/pointController.js'

const router = express.Router();
router.get('/', getQuestion);
router.post('/',createQuestion);
router.get('/points', getAllPoints);
router.post('/points',createPoints);
router.patch('/points',editAllPoints);
router.get('/points/:player', getPoints);
router.patch('/points/:player',editPoints);
export default router;