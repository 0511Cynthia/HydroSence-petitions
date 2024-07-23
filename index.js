import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import datasRouter from './src/routes/data.routes.js';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/datas', datasRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Escuchando en el puerto 3000");
});
