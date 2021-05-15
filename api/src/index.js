const app = require('./api/')
const { port } = require('./config')

app.listen(port, () => {
  console.log(`process running on port ${port}`)
})
