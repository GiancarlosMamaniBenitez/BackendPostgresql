import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'



import tarjetaRouter from "./src/routes/tarjeta-router.js"
import usuarioRouter from "./src/routes/usuario-router.js"

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/tarjeta", tarjetaRouter)
app.use("/usuario", usuarioRouter);


export default app