import PostPoints from '../models/pointModel.js';

export const getPoints = async (req,res) => {
    try {
        const points = await PostPoints.find();
        res.json(points);
    } catch (error) {
        res.status(404).json({message: error.message});
}   }

export const createPoints = async (req,res) => {
    const newPostPoints = new PostPoints({
        player: req.body.player,
        points: req.body.points
    });
    try {   
        const savedpoints = await newPostPoints.save();    
        res.status(201).json(savedpoints);
    } catch (error) {
        res.status(409).json({message: error.message});
}   }

export const editPoints = async (req,res) => {
   try{
    const updatedPoints = await PostPoints.updateOne(
        {player: req.params.player},
        {$set: {points: req.body.points}})
        res.json(updatedPoints);
   }catch(err){
    res.json({message: error.message});
   }
}

export const editAllPoints = async (req,res) => {
    try{
     const updatedPoints = await PostPoints.updateMany(
         {player: {$gt: 0}},
         {$set: {points: req.body.points}})
         res.json(updatedPoints);
    }catch(err){
     res.json({message: error.message});
    }
 }