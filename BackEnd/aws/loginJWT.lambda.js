const jwt = require('jsonwebtoken')

exports.handler = function index(event, context, callback) {

    let permissions = ''
    timeToExpire = '2 days'
    const secret = Math.random().toString(36).substr(2, 9)
    const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: event.usuario,
        password: event.senha,
        LoggedIn: new Date()
    }
    console.log('indo para sign do jwt');
    if (req.params.usuario === 'CelsoLisboa') {
        permissions = 'Adm';
    } else {
        permissions = 'Funcionario';
    }
    jwt.sign({
        user: user,
        permissions: permissions
    }, secret, {
            expiresIn: timeToExpire
        }, (err, token) => {
            let result = {
                id: secret,
                Token: token,
                expiresIn: timeToExpire,
            }
            callback(err, result)
            console.log('dentro do sign');
            console.log('header', isValid);
        })
}

/* 
    this.verifyLogin = ((req, res, next) => {
        console.log('Dentro de verify', req.header('Authorization'));
        const token = req.header('Authorization')
        const TokenDecoded = jwt.decode(token)
        res.send(TokenDecoded)

    }) */
