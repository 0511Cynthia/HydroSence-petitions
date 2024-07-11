import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/data', require('./src/routes/data.routes'));

app.listen(process.env.PORT||3003,() => {
    console.log("Escuchando en el puerto 3003");
});