import express from 'express';
import data from './data.mjs';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/",(req,res) => {
    res.send(data.services) 
 });

export default app;