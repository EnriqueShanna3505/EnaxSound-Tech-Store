import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

//creates a SQL connection using our environment variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// this sql function we export is used as a tagged template literal which allows us to write SQL queries safely
//postgresql://enaxsound-store-db_owner:npg_TOmM9kG5YCLw@ep-tiny-violet-a13njmgd-pooler.ap-southeast-1.aws.neon.tech/enaxsound-store-db?sslmode=require
