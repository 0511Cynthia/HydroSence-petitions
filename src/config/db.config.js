import 'dotenv/config';
import { createConnection as mysqlCreateConnection } from "mysql2/promise";

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

const createConnection = async () =>{
    return await mysqlCreateConnection(config);
} 

export {createConnection, config};