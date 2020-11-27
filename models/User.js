import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // listing: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Listing',
    //   required: true,
    // },
    email: {
      type: String,
      required: true,
      uniquie: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
