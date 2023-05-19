const { Router } = require('express')
const PostNoteController = require('../../controller/note/post')
const GetNoteController = require('../../controller/note/get')

const router = Router()

router.get('/', GetNoteController.run)
router.post('/', PostNoteController.run)

module.exports = router
