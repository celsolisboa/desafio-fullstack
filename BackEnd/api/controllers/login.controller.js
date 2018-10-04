const jwt = require('jsonwebtoken')

function Login() {


    this.doLogin = function (req, res, next) {
        console.log('funciona?');
        const secret = Math.random().toString(36).substr(2, 9)
        const user = {
            id: Math.random().toString(36).substr(2, 9),
            name: req.params.usuario,
            password: req.params.senha
        }
        jwt.sign({ user: user }, secret, (err, token) => {
            const result = {
                id: secret,
                Token: token
            }
            res.send(result)
        })

    }

    this.verifyLogin = ((req, res, next) => {
        const header = req.header['authorization ']

        if (typeof header !== 'undefined') {
            const splitHeader = header.split(' ')
            return true
        } else {
          return false  
        }
    })
}
module.exports = new Login();