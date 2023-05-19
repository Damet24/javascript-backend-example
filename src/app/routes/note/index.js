const { Router } = require('express')
const PostNoteController = require('../../controller/note/post')
const GetNoteController = require('../../controller/note/get')
const DeleteNoteController = require('../../controller/note/delete')

const router = Router()

router.get('/', GetNoteController.run)
router.post('/', PostNoteController.run)
router.delete('/:id', DeleteNoteController.run)

module.exports = router
