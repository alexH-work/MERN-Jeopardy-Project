import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    question: String,
    answer: String,
    category: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;