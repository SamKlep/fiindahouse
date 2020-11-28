import asyncHandler from 'express-async-handler'
import Realtor from '../models/Realtor.js'

// @ desc       Fetch all realtors
// @route       GET /api/realtors
// @access      Public
const getRealtors = asyncHandler(async (req, res) => {
  const realtors = await Realtor.find({})

  res.json(realtors)
})

// @ desc       Fetch single realtor
// @route       GET /api/realtor/:id
// @access      Public
const getRealtorById = asyncHandler(async (req, res) => {
  const reator = await Realtor.findById(req.params.id)

  if (reator) {
    res.json(reator)
  } else {
    res.status(404)
    throw new Error('Realtor not found')
  }
})

export { getRealtors, getRealtorById }
