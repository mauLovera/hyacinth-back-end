import { Router } from 'express'
import * as collectionsController from '../controllers/collections.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, collectionsController.index)
router.post('/', checkAuth, collectionsController.create)
router.delete('/:id', checkAuth, collectionsController.delete)
router.put('/:id', checkAuth, collectionsController.update)


export { router }
