const Courses = require('../../models/Courses')
const empty = require('is-empty')

module.exports = {
    async create(req, res){
        const {name, teachers, room, start, end} = req.body;

        //Proibindo campos vazios
        if(empty(name)){
            return res.json("O campo 'nome' está vazio!")
            &&
            console.log("O campo 'nome' está vazio!")
        }

        if(empty(teachers)){
            return res.json("O campo 'professor' está vazio!")
            &&
            console.log("O campo 'professor' está vazio!")
        }

        if(empty(room)){
            return res.json("O campo 'sala' está vazio!")
            &&
            console.log("O campo 'sala' está vazio!")
        }

        if(empty(start)){
            return res.json("O campo 'inicio' está vazio!")
            &&
            console.log("O campo 'inicio' está vazio!")
        }

        if(empty(end)){
            return res.json("O campo 'fim' está vazio!")
            &&
            console.log("O campo 'fim' está vazio!")
        }

        await Courses.create({
            name,
            teachers,
            room,
            start,
            end
        })

        return res.json("Curso criado com sucesso!")
        &&
        console.log("Curso criado com sucesso!")
    }
}