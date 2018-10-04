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
        console.log('indo para sign do jwt');

        jwt.sign({
            user: user
        }, secret, {
            expiresIn: '1000s'
        }, (err, token) => {
            const result = {
                id: secret,
                Token: token
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