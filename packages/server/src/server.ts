import express from 'express'

import './database'
import { routes } from './routes'
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000
app.set('port', port)

app.use(express.json())
app.use(routes)

app.listen(port)
console.log('API running at port ' + port)


