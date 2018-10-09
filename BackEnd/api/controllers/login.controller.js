const jwt = require('jsonwebtoken')

function Login() {

    this.teste = ((req, res, next) => {
        console.log('Olaaaaaa')
        var decoded = jwt.decode(req.params.token);
        res.send(decoded)
    })

    this.doLogin = function (req, res, next) {
        console.log('funciona?');
        let permissions = ''
        timeToExpire = '2 days'
        const secret = Math.random().toString(36).substr(2, 9)
        const user = {
            id: Math.random().toString(36).substr(2, 9),
            name: req.params.usuario,
            password: req.params.senha,
            LoggedIn: new Date()
        }
        console.log('indo para sign do jwt');
        if (req.params.usuario === 'CelsoLisboa') {
            permissions = 'Adm'
        } else {
            permissions = 'Funcionario'
        }
        jwt.sign({
            user: user,
            permissions: permissions
        }, secret, {
                expiresIn: timeToExpire
            }, (err, token) => {
                const result = {
                    id: secret,
                    Token: token,
                    expiresIn: timeToExpire,
                }
                res.send(result)
                console.log('dentro do sign');
                console.log('header', isValid);
            })
    }


    this.verifyLogin = ((req, res, next) => {
        console.log('Dentro de verify', req.header('Authorization'));

        const token = req.header('Authorization')
        const TokenDecoded = jwt.decode(token)
        res.send(TokenDecoded)

    })


}
module.exports = new Login();