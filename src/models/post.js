import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  post: String,
  description: String,
  author: String,
  likes: Number
})

const Posts = mongoose.model('Posts', schema)

export default Posts
