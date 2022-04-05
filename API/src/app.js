import express from 'express';
import cors from 'cors';
import { openDb } from './configDB.js';
import { createTableAuth } from './controler/user.js'
const app = express();
app.use(express.json());
app.use(cors());

/* //criar database sqlite. 
openDb(); 
//criar nova tabela/ tem que mudar o nome no controler 
createTableAuth(); */

// Routes import
import router from './routes.js';
app.use(router);

app.listen(3000, function () {
    console.log('Api rodando')
});









