import {createConnection} from '../configs/db.config.js';

class Datas{
    constructor({id_data, date, data, engine_ref_dat}){
        this.id_data = id_data
        this.date = date 
        this.data = data 
        this.engine_ref_dat = engine_ref_dat
    }
    static async getAll({offset, limited}){
        const connection = await createConnection()
        
        let query = `SELECT * from data`

        if (offset >= 0 && limited) {
            query += ` LIMIT ${offset}, ${limit}`
        }
        const [datas] = await connection.query(query)
        connection.end()
        return datas
    }
    static async dataById(id_data){
        const connection = await createConnection()
        const [datas] = await connection.query(`SELECT * FROM data WHERE id_data = ?`, [id_data])
        connection.end()
        return datas
    }
    static async dataByDate(date){
        const connection = await createConnection()
        const [datas] = await connection.query(`SELECT * FROM data WHERE date = ?`, [date])
        connection.end()
        return datas
    }
}

export default Datas;