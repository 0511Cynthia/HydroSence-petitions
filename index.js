import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import fs from 'fs'
import https from 'https'
import router from './src/routes/data.routes.js'

const port = process.env.PORT || 3000;
const app = express();

// Configuración de CORS
app.use(cors({
    origin: "*",
    methods: ['GET'],
}));

// Parseo de JSON
app.use(express.json());

// Rutas
app.use('/datas', router);

// Cargar certificados SSL
const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/hydrosense-peticions.integrador.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/hydrosense-peticions.integrador.xyz/fullchain.pem')
};

// Crear servidor HTTPS
https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
