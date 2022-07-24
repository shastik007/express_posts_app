import  Router  from "express";
import PostController from "./PostController.js";

const router = new Router

router.post('/posts',async(req,res)=>{
    PostController.create
})


router.get('/posts',async(req,res)=>{
    PostController.getAllPosts
})


router.get('/posts/:id',async(req,res)=>{
    PostController.getPostById
})


router.put('/posts/:id',async(req,res)=>{
    PostController.updatePostById
})


router.delete('/posts/:id',async(req,res)=>{
    PostController.deletePostById
})

export default router