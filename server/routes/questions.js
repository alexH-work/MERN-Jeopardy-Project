import express from 'express';

const router = express.Router();

router.get('/', (req,res)=> {res.send(questions)});
router.post('/',(req,res)=> {
    const question =req.body;
    

    try {       
        res.status(201).json(question);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

    res.send(`${question.firstName} added to database`)
});
export default router;