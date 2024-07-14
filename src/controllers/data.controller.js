import Datas from '../models/data.models.js';
import 'dotenv/config';

const index = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const datas = await Datas.getAll(limit, offset);

        return res.status(200).json({
            success: true,
            datas,
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
const getById = async (req, res) => {
    try{
        const id_data = req.params.id_data
        const data = await Datas.dataById(id_data)

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