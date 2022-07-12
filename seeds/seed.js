const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const users = [
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  }
]

const blogs = [
  {
    "title": "Music Near Me",
    "contents": "A mobile app that will send you notifications whenever a concert is playing in your area."
  },
  {
    "title": "The Ultimate Tech Quiz",
    "contents": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!"
  },
  {
    "title": "Roll 'Em Up",
    "contents": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes."
  }
]

const comments = [
  {
    "title": "Music Near Me",
    "contents": "A mobile app that will send you notifications whenever a concert is playing in your area."
  },
  {
    "title": "The Ultimate Tech Quiz",
    "contents": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!"
  },
  {
    "title": "Roll 'Em Up",
    "contents": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes."
  }
]

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(users, { individualHooks: true });
    await Blog.bulkCreate(blogs);
    await Comment.bulkCreate(comments);

    process.exit(0);
  } catch(err){
    console.log(err);
  };

};

seedDatabase();
