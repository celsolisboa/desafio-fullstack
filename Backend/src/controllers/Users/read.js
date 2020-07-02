const Users = require('../../models/Users')
const empty = require('is-empty')
const {Op} = require('sequelize')

module.exports = {
    async readByAttributes(req, res){
        const {attribute, body} = req.headers;
        var user;

        switch (attribute) {
            case "name":
                
                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'nome' está vazio.")
                    &&
                    console.log("O campo 'nome' está vazio.")
                }

                //consultando o usuário  
                const name = await Users.findAll({
                    where: {
                        name: {
                            [Op.like]: body+'%'
                        }
                    }
                })

                //checando se o usuário existe
                if(empty(name)){
                    return res.status(201).json('Não existe nenhum usuário com este nome.')
                    &&
                    console.log("Não existe nenhum usuário com este nome.")   
                }

                user = name;

            break;
        
            case "email":

                //proibindo campo vazio
                if(empty(body)){
                    return res.json("O campo 'email' está vazio.")
                    &&
                    console.log("O campo 'email' está vazio.")
                }

                //consultando o usuário  
                const email = await Users.findOne({
                    where: {
                        email: body
                    }
                })

                //checando se o usuário existe
                if(empty(email)){
                    return res.status(203).json('Não existe nenhum usuário com este email.')
                    &&
                    console.log("Não existe nenhum usuário com este email.")   
                }

                user = email;

            break;
        }

            //resultado da consulta
            return res.json(user)
    }
}