import express from 'express';
import { getQuestion, createQuestion } from '../controllers/controller.js'

const router = express.Router();
router.get('/', getQuestion);
router.post('/',createQuestion);
export default router;