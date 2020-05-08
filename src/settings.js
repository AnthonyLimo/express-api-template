import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentalVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
