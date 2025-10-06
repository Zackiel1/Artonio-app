const { Posts } = require("../db.js");

const putBlog = async (id_post, content, image_url) => {
    
    await Posts.update({ content, image_url }, { where: { id: id_post }});
    
    return "Post editado";

};

module.exports = putBlog;