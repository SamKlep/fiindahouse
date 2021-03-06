import express from 'express'

import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} from '../controllers/userController.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)

export default router
