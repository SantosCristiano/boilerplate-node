class PostsController {
  constructor (Posts) {
    this.Posts = Posts
  }

  getAll (req, res) {
    return this.Posts.find({}).then(posts => res.send(posts))
  }
}

export default PostsController
