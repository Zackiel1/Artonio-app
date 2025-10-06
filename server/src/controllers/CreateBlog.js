const { Posts } = require("../db.js");

const createBlog = async (user_id, content, image_url) => {
    
    const createPost = await Posts.create({
        user_id,
        content,
        image_url
    });
    
    return "El posts se creo correctamente";
};

module.exports = createBlog;