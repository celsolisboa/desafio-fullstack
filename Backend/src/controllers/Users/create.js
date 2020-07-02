const Users = require('../../models/Users');
const empty = require('is-empty');

module.exports = {
    // Criando usuários
    async create(req, res){
        const {name, email, password} = req.body;

        if(empty(name)){
            return res.json("O campo 'nome' está vazio!")
            &&
            console.log("O campo 'nome' está vazio!")
        }

        if(empty(email)){
            return res.json("O campo 'email' está vazio!")
            &&
            console.log("O campo 'email' está vazio!")
        }

        if(empty(password)){
            return res.json("O campo 'senha' está vazio!")
            &&
            console.log("O campo 'senha' está vazio!")
        }

        //Checando se o email já existe 
        const checkEmail = await Users.findOne({
            where: {
                email: email
            }
        })

        if(checkEmail){
            return res.json("Já existe um usuário cadastrado com este email!")
            &&
            console.log("Já existe um usuário cadastrado com este email!")
        }
        
        //Criando usuários
        await Users.create({
            name,
            email,
            password
        })

        return res.json("Usuário '"+name+"' cadastrado com sucesso!")
        &&
        console.log("Usuário '"+name+"' cadastrado com sucesso!")
    }
}