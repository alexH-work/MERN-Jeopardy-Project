import mongoose from 'mongoose';

const postPointsSchema = mongoose.Schema({
    player: String,
    points: Number,
});

const PostPoints = mongoose.model('PostPoints', postPointsSchema)

export default PostPoints;