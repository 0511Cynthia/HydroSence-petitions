import { createConnection } from '../config/db.config.js';

class Datas {
  constructor({ id_data, date, data, engine_ref_dat }) {
    this.id_data = id_data;
    this.date = date;
    this.data = data;
    this.engine_ref_dat = engine_ref_dat;
  }

  static async getAll({ offset = 0, limit = 10 } = {}) {
    const connection = await createConnection();

    let query = `SELECT * FROM datas`;
    const params = [];

    if (limit) {
      query += ` LIMIT ?, ?`;
      params.push(offset, limit);
    }

    const [datas] = await connection.query(query, params);
    connection.end();
    return datas;
  }

  static async dataById(engine_ref_dat) {
    const connection = await createConnection();
    const [datas] = await connection.query(`SELECT * FROM datas WHERE engine_ref_dat = ?`, [engine_ref_dat]);
    connection.end();
    return datas;
  }
  static async dataByDate(date) {
    const connection = await createConnection();
    const [datas] = await connection.query(`SELECT * FROM datas WHERE date = ?`, [date]);
    connection.end();
    return datas;
  }

  static async count() {
    const connection = await createConnection();
    const [result] = await connection.query(`SELECT COUNT(*) as count FROM datas`);
    connection.end();
    return result[0].count;
  }
}

export default Datas;
