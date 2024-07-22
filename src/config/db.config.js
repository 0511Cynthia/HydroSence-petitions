import 'dotenv/config';
import { createConnection as mysqlCreateConnection } from "mysql2/promise";

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

const createConnection = async () =>{
    return await mysqlCreateConnection(config);
} 

export {createConnection, config};