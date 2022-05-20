import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

export default {
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: process.env.POSTGRES_USERNAME,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   logging: false,
   entities: [
      path.join(__dirname, '../entities/**/*.*'),
   ],
   migrations: [
      path.join(__dirname, '../migrations/**/*.*'),
   ],
   cli: {
      entitiesDir: path.join(__dirname, '../entities'),
      migrationsDir: path.join(__dirname, '../migrations'),
   },
} as ConnectionOptions;
