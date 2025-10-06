const { Router } = require("express");
const { postCreateBlogHandler, getBlogsHandler, editblogHandler, deleteBlog } = require("../handlres/blogHandlers");

const blogRouter = Router();

blogRouter.post("/createBlog", postCreateBlogHandler);
blogRouter.get("/getBlogs" , getBlogsHandler);
blogRouter.put("/editBlog/:id", editblogHandler);
blogRouter.delete("/deleteBlog/:id", deleteBlog)

module.exports = blogRouter;