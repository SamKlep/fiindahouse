import asyncHandler from 'express-async-handler'
import Listing from '../models/Listing.js'

// @ desc       Fetch all listings
// @route       GET /api/listings
// @access      Public
const getListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find({})

  res.json(listings)
})

// @ desc       Fetch single listing
// @route       GET /api/listing/:id
// @access      Public
const getListingById = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id)

  if (listing) {
    res.json(listing)
  } else {
    res.status(404)
    throw new Error('Listing not found')
  }
})

export { getListings, getListingById }
