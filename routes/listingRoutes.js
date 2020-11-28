import express from 'express'

import {
  getListings,
  getListingById,
} from '../controllers/listingController.js'

const router = express.Router()

router.route('/').get(getListings)

router.route('/:id').get(getListingById)

export default router
