import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/datas', datasRouter)

app.listen(port||3006,() => {
    console.log("Escuchando en el puerto 3006");
});