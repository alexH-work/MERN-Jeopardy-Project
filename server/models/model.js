import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    question: String,
    answer: String,
    category: String,
});

const PostQuestion = mongoose.model('PostQuestion', postSchema)

export default PostQuestion;