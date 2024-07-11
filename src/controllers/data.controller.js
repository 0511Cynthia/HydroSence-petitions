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
export{
    index
}