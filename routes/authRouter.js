import { Router } from 'express'
const router = Router()
import { register, login, logout } from '../controllers/authController.js'
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js'

router.route('/register').post(validateRegisterInput, register)
router.route('/login').post(validateLoginInput, login)
router.route('/logout').get(logout)
export default router
