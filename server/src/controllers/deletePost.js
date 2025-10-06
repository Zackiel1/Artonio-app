const { Posts } = require("../db.js");

const deletePost = async (id_post) => {
    
    const result = await Posts.destroy({
        where: {
        id: id_post,
        },
    });
    
    if (result === 0) return "Post no existente";
    
    return "Post eliminado exitoxamente";
};

module.exports = deletePost;