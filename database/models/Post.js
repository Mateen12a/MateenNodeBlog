const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    username: String,
    description: String,
    image: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;