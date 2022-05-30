'use strict'
const Database = use('Database')
class UserController {

    async store ({request, response}) {
        const userFake = {
            email: 'teste@gmail.com',
            senha:'123456'
        }
        const {email: email, senha: senha} = request.only(['email','senha'])   
        
        if(userFake.email == email && userFake.senha == senha){
            return response.status(200).send({message: true})
        }else{
            return response.status(401).send({message: false})
        }
    }


}

module.exports = UserController
