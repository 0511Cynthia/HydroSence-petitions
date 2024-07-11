import 'dotenv/config';
import { createConnection } from "mysql2/promise";

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

const connectToDatabase = async () =>{
    return await createConnection(config);
} 

export {connectToDatabase as createConnection, config};