import asyncHandler from 'express-async-handler'
import User from '../models/User.js'

// @ desc       Fetch all users
// @route       GET /api/users
// @access      Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})

  res.json(users)
})

// @ desc       Fetch single user
// @route       GET /api/user/:id
// @access      Public
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { getUsers, getUserById }
