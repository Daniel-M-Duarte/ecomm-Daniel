const express = require('express');
const routes = require('./api/routes')

const app = express()
const port = 3010

routes(app)

app.listen(port, () => console.log(`Escutando na porta ${port}`))

module.exports = app
