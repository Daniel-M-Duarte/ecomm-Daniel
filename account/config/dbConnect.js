import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST_NAME_2}:27017/ecomm-account?authSource=admin`);

const db = mongoose.connection;

export default db;
