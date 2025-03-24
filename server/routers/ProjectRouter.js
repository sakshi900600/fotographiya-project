const express = require('express')
const router = express.Router() 

const projectcontroller = require('../controller/ProjectController')
const upload = require('../middleware/upload.file')

router.post('/', upload.single('wedding_img'), projectcontroller.store)
router.get('/', projectcontroller.index)
router.delete('/:id', projectcontroller.trash)
router.put('/:id', projectcontroller.edit)

module.exports = router
