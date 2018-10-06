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
                /*          const isValid = verifyLogin(req, res, next).isValid            
                         if (isValid) {
                             
                         } else {
                             res.send('Nope')
                         } */
            })
    }



    this.verifyLogin = ((req, res, next) => {
        console.log('Dentro de verify');

        const bearerheader = res.setHeader('Authorization', 'kjksajkjsa')
        console.log(bearerheader);
        res.send('oi')
        /*      if (typeof bearerheader !== 'undefined') {
                 const splitHeader = bearerheader.split(' ')
                 const headerToken = splitHeader[1]
                 req.token = headerToken
             } else {
     
                 res.send(false)
             } */
    })


}
module.exports = new Login();