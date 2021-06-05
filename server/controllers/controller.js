import PostQuestion from '../models/model.js';

export const getQuestion = (req,res)=> {res.send(questions)}

export const createQuestion = (req,res)=> {
    const question =req.body;
    

    try {       
        res.status(201).json(question);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

    res.send(`${question.firstName} added to database`)
}