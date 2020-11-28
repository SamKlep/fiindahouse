import express from 'express'

import {
  getRealtors,
  getRealtorById,
} from '../controllers/realtorController.js'

const router = express.Router()

router.route('/').get(getRealtors)

router.route('/:id').get(getRealtorById)

export default router
