import Datas from '../models/data.models.js';
import 'dotenv/config';

const index = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
  
      const datas = await Datas.getAll({ offset, limit });
      const totalDatos = await Datas.count();
  
      const response = {
        message: "Datos obtenidos exitosamente",
        data: datas,
        total: totalDatos,
        totalPages: Math.ceil(totalDatos / limit),
        currentPage: page,
      };
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Ocurrió un error al obtener los datos",
        error: error.message,
      });
    }
  };
  
  const getById = async (req, res) => {
    try {
      const engine_ref_dat = req.params.engine_ref_dat;
      const data = await Datas.dataById(engine_ref_dat);
  
      return res.status(200).json({
        success: true,
        data,
        message: "Datos obtenidos correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Ocurrió un error al obtener los datos",
        error: error.message,
      });
    }
  };
const getByDate = async (req, res) => {
    try{
        const date = req.params.date
        const data = await Datas.dataByDate(date)

        return res.status(200).json({
            success: true,
            data,
            message: "se obtuvieron los datos correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "ocurrió un error al obtener los datos",
            error: error.message
        });
    }
}
export{
    index,
    getById,
    getByDate
}