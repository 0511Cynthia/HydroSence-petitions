import { createConnection } from '../config/db.config.js';

class Datas{
    constructor({id_data, date, data, engine_ref_data}){
        this.id_data = id_data
        this.date = date 
        this.data = data 
        this.engine_ref_data = engine_ref_data
    }
    static async getAll({offset, limit}){
        const connection = await createConnection()
        
        let query = `SELECT * from datas`

        if (offset >= 0 && limit) {
            query += ` LIMIT  ?, ?`
        }
        const [datas] = await connection.query(query, [offset, limit])
        connection.end()
        return datas
    }
    static async dataById(id_data){
        const connection = await createConnection()
        const [datas] = await connection.query(`SELECT * FROM datas WHERE id_data = ?`, [id_data])
        connection.end()
        return datas
    }
    static async dataByDate(date){
        const connection = await createConnection()
        const [datas] = await connection.query(`SELECT * FROM datas WHERE date = ?`, [date])
        connection.end()
        return datas
    }
}

export default Datas;
