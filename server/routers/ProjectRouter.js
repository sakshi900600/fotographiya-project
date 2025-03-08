const express = require('express')
const app = express()

const projectcontroller = require('../controller/ProjectController')
app.post('/',projectcontroller.store)
app.get('/',projectcontroller.index)
app.delete('/:id',projectcontroller.trash)
app.put('/:id',projectcontroller.edit)


module.exports = app