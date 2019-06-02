import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>
  res.send([
    {
      post: 'Default Post',
      description: 'Default description',
      author: 'Default author',
      likes: 100
    }
  ])
)

export default router
