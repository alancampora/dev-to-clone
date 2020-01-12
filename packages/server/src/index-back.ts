import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';

createConnection()
  .then(async connection => {
     //User
    console.log('Inserting a new user into the database...');

    const user = new User();
    user.email = 'test@test.com';
    user.password = 'this-is-a-password';

    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

     //Post
    console.log('Inserting a new Post');
    const post = new Post();
    post.user = user;
    post.title = 'this is a test post';
    post.body =
      "Software quality is very important, especially for commercial and system software like Microsoft Office, Microsoft Windows and Linux. If software is faulty (buggy), it can delete a person's work, crash the computer and do other unexpected things. Faults and errors are called 'bugs' which are often discovered during alpha and beta testing.";

    await connection.manager.save(post);

    console.log('Loading posts from the database...');
    const posts = await connection.manager.find(Post);
    console.log('Loaded posts: ', posts);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error));
