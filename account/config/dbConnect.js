import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@mongo:27017/ecomm-account?authSource=admin');
// mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm-account?authSource=admin');

let db = mongoose.connection;

export default db;