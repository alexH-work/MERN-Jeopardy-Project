import PostQuestion from '../models/model.js';

export const getQuestion = (req,res)=> {
    try {
        const questions = PostQuestion.find(
            {}, function(err, result) {
                if (err) {
                  console.log(err);
                } else {
                  res.json(result);
                }
              }
        );

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createQuestion = (req,res)=> {
    const data =req;    
    const newPostQuestion = new PostQuestion(data);

    try {   
        newPostQuestion.save();    
        res.status(201).json(newPostQuestion);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

    res.send(`${newPostQuestion} added to database`)
}