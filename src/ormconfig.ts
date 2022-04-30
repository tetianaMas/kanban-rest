import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  type: 'postgres',
  host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
  port: 5432,
  cache: false,
  username: 'gunhtcgvtkbsik',
  password: '11699e3156a6e6eb5a5b66351e718a3861b2ca9f32ae246e6dfd54b865678327',
  database: 'd8o20b6vvccmgo',
  synchronize: false,
  logging: false,
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
