const { Router } = require('express')
const NoteRoutes = require('./note/index')

const router = Router()

router.use('/note', NoteRoutes)

module.exports = router
