import Post from './Post.js'


class PostController {
    async create(req,res){
        try {
            const {title,author,image,content} = req.body
            const post = await Post.create({title,author,image,content})
            res.send(JSON.stringify(post))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAllPosts(req,res){
        try {
            const post = await Post.find()
            res.send(JSON.stringify(post))
        } catch (error) {
            res.status(500).json(error)
        }
    }


}

export default PostController