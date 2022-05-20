import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import dbOptions from './database/ormconfig';

const PORT = process.env.PORT ?? '3000';

createConnection(dbOptions)
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
    });
  })
  .catch((err: any) => console.log(err));
