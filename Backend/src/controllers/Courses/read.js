const Courses = require("../../models/Courses");
const empty = require('is-empty')
const {Op} = require('sequelize')

module.exports = {
    async readall(req, res){
        const courses = await Courses.findAll();
        
        return res.json(courses);
    },

    async readByAttributes(req, res){
        const {attribute, body} = req.headers;

        var course;

        switch(attribute){
            case "id":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'id' está vazio.")
                    &&
                    console.log("O campo 'id' está vazio.")
                }

                const id = await Courses.findOne({
                    where: {
                        id: body
                    }
                })

                //checando se existe um curso com o id informado
                if(empty(id)){
                    return res.json('Não existe nenhum curso com este ID.')
                    &&
                    console.log("Não existe nenhum curso com este ID.")   
                }
            
                course = id;

            break;

            case "name":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'nome' está vazio.")
                    &&
                    console.log("O campo 'nome' está vazio.")
                }

                const name = await Courses.findAll({
                    where: {
                        name: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se existe um curso com o nome informado
                if(empty(name)){
                    return res.json('Não existe nenhum curso com este nome.')
                    &&
                    console.log("Não existe nenhum curso com este nome.")   
                }
            
                course = name;

            break;

            case "teachers":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'professor' está vazio.")
                    &&
                    console.log("O campo 'professor' está vazio.")
                }

                const teachers = await Courses.findAll({
                    where:{
                        teachers: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se existe um curso com o professor informado
                if(empty(teachers)){
                    return res.json('Não existe nenhum curso com este professor.')
                    &&
                    console.log("Não existe nenhum curso com este professor.")   
                }
            
                course = teachers;

            break;
            
            case "room":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'nome' está vazio.")
                    &&
                    console.log("O campo 'nome' está vazio.")
                }

                const room = await Courses.findAll({
                    where:{
                        room: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se existe um curso com a sala informada
                if(empty(room)){
                    return res.json('Não existe nenhum curso nesta sala.')
                    &&
                    console.log("Não existe nenhum curso nesta sala.")   
                }
            
                course = room;

            break;

            case "start":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'inicio' está vazio.")
                    &&
                    console.log("O campo 'inicio' está vazio.")
                }

                const start = await Courses.findAll({
                    where:{
                        start: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se existe um curso com o inicio informada
                if(empty(start)){
                    return res.json('Não existe nenhum curso com este horário de início.')
                    &&
                    console.log("Não existe nenhum curso com este horário de início.")   
                }
            
                course = start;

            break;

            case "end":
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'fim' está vazio.")
                    &&
                    console.log("O campo 'fim' está vazio.")
                }

                const end = await Courses.findAll({
                    where:{
                        end: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se existe um curso com o fim informada
                if(empty(end)){
                    return res.json('Não existe nenhum curso terminando neste horário.')
                    &&
                    console.log("Não existe nenhum curso terminando neste horário.")   
                }
            
                course = end;

            break;
        }

        return res.json(course)
    } 
}