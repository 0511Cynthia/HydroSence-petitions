import 'dotenv/config';
import { createConnection as mysqlCreateConnection } from "mysql2/promise";

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST
};

const createConnection = async () =>{
    return await mysqlCreateConnection(config);
} 

export {createConnection, config};