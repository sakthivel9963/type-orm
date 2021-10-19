import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    const connection = await createConnection();

    // create express server
    app.listen(PORT, () => {
      console.log(`listening on port : http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
