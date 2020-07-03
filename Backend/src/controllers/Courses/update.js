const Courses = require('../../models/Courses')
const empty = require('is-empty')

module.exports = {
    async update(req, res){
        const { id } = req.params;
        const { name, teachers, room, start, end } = req.body;

        //Proibindo campos vazios
        if(empty(name)){
            return res.status(201).json("O campo 'nome' está vazio!")
            &&
            console.log("O campo 'nome' está vazio!")
        }

        if(empty(teachers)){
            return res.status(201).json("O campo 'teachers' está vazio!")
            &&
            console.log("O campo 'teachers' está vazio!")
        }

        if(empty(room)){
            return res.status(201).json("O campo 'sala' está vazio!")
            &&
            console.log("O campo 'sala' está vazio!")
        }

        if(empty(start)){
            return res.status(201).json("O campo 'início' está vazio!")
            &&
            console.log("O campo 'início' está vazio!")
        }

        if(empty(end)){
            return res.status(201).json("O campo 'fim' está vazio!")
            &&
            console.log("O campo 'fim' está vazio!")
        }

        //verificando se o id informado existe
        const course = await Courses.findByPk(id);

        if (!course) {
            return res.status(201).json("Este curso não existe!")
            &&
            console.log("Este curso não existe!")
        }

        await Courses.update({
            name,
            teachers,
            room,
            start,
            end
        },{
            where: 
            {
            id: id
            }
            })

        return res.json("Os dados do curso '"+name+"' foram atualizados com sucesso!")
        &&
        console.log("Os dados do curso '"+name+"' foram atualizados com sucesso!")
    }
}