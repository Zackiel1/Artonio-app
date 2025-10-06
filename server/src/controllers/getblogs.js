const { Posts } = require('../db.js');

const getBlogs = async (req, res) => {

    const posts = await Posts.findAll();
    return posts;
};

module.exports = getBlogs;