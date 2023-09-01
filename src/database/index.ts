import 'reflect-metadata';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'database_rentx',
  // host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
});

dataSource
  .initialize()
  .then(async () => {
    console.log('Database connection ok');
  })
  .catch((err) => {
    console.error('Database error connection', err);
  });
