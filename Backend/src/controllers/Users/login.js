const Users = require('../../models/Users');
const empty = require('is-empty')

module.exports = {
    async login(req, res){
        const {email, password} = req.body;

        // proibindo campo vazio
        if(empty(email)){
            return res.json("O campo 'email' está vazio.")
            &&
            console.log("O campo 'email' está vazio.");
        }

        if(empty(password)){
            return res.json("O campo 'senha' está vazio.")
            &&
            console.log("O campo 'senha' está vazio.");
        }

        const user = await Users.findOne({
            where: {
                email: email
            }
        })

        if(!user){
            return res.status(201).json('Não existe um usuário com este email!')
            &&
            console.log('Não existe um usuário com este email!')
        }

        if(password != user.password){
            return res.status(202).json('Senha incorreta!')
            &&
            console.log('Senha incorreta!')
        }

        return res.json("Usuário '"+user.name+"' logado com sucesso!")
        &&
        console.log("Usuário '"+user.name+"' logado com sucesso!")
    }
}