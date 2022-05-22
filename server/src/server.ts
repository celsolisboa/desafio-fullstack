import express from 'express'
import { prisma } from './prisma';

//GET = Buscar informações no BD
// POST = Cadastrar informações no DB
// PUT = Atualizar informações de uma identificação 
// PATH = Atualizar uma informação unica de uma entidade 
// Delelte = Apagar algo 

const app = express();  
app.use(express.json());
app.post('/classroom', async (req, res) => {
    const { room_number, start_time, end_time } = req.body
    const creatClassroom = await prisma.classroom.create({
        data: {
            room_number,
            start_time,
            end_time,
        }
    })
    return res.status(201).json({ data: creatClassroom});
});

app.listen(3333, () => {
    console.log('Http server running port 3333')
})