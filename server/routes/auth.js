import {Router} from 'express'
import {register, login, getMe} from '../controllers/contr_auth.js'

const route = new Router()

// Register
router.post('/register', register()

// Login
router.post('/login', login) 

// Get Me
router.get('/getMe', getMe) 


export default router
