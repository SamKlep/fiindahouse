import express from 'express'
import {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
} from '../controllers/authController.js'

const router = express.Router()

// const { protect } = require('../middleware/auth');

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', protect, getMe)
router.put('/updatedetails', protect, updateDetails)
router.put('/updatepassword', protect, updatePassword)

module.exports = router
