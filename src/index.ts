import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import app from './app';

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    const connection = await createConnection();

    // console.log('Inserting a new user into the database...');
    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log('Saved a new user with id: ' + user.id);

    // console.log('Loading users from the database...');
    // const users = await connection.manager.find(User);
    // console.log('Loaded users: ', users);

    // create express server
    app.listen(PORT, () => {
      console.log(`listening on port : http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
