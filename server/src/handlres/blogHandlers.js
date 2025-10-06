const createBlog = require("../controllers/CreateBlog");
const deletePost = require("../controllers/deletePost");
const getBlogs = require("../controllers/getblogs");
const putBlog = require("../controllers/putBlog");

const postCreateBlogHandler = async (req, res) => { 
    const { user_id, content, image_url } = req.body;
    
    try {
        let result = await createBlog( user_id, content, image_url);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
        
    }
};

const getBlogsHandler = async (req, res) => {

    try {
        let result = await getBlogs();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
};

const editblogHandler = async (req, res) => {
    const id_post = req.params.id;
    const { content, image_url } = req.body
    
    try {
        let result = await putBlog(id_post, content, image_url);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteBlog = async (req, res) => {
    const id_post = req.params.id;

    try {
        let result = await deletePost(id_post);
        res.status(200).json(result);
    } catch (error) {  
        res.status(400).json(error);
    }
};

module.exports = {
    postCreateBlogHandler,
    getBlogsHandler,
    editblogHandler,
    deleteBlog,
};