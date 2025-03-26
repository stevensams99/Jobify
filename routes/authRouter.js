import { Router } from 'express'
const router = Router()
import { register, login } from '../controllers/authController.js'
import { validateRegisterInput } from '../middleware/validationMiddleware.js'

router.route('/register').post(validateRegisterInput, register)
router.route('/login').post(login)

export default router
