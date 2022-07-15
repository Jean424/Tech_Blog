const { Comment } = require('../models');

const commentData = [{
    comment_text: "Go out take some fresh air instead of stay at home.",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Playing in the water could help you cooling down faster",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Morning cafe is a best place to order some tasty desert for morning tea time.",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;