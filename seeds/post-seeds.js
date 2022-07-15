const { Post } = require('../models');

const postData = [{
    title: 'Catching a Breath',
    content: 'Take a walk, look at some views and let yourself breathe. It is ok to take that break.',
    user_id: 1

},
{
    title: 'Cool Down',
    content: 'Now that you have got your new workout routine in place. Learn how to be efficent in cooling down',
    user_id: 2
},
{
    title: 'Morning Tea',
    content: 'Take some fresh air and do some streach in the moring before go to work.',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;