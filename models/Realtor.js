import mongoose from 'mongoose'

const realtorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description can not be more than 500 characters'],
    },
    phone: {
      type: String,
      maxlength: [20, 'Phone number can not be longer than 20 characters'],
    },
    email: {
      type: String,
      required: true,
      uniquie: true,
    },
    is_mvp: {
      type: Boolean,
      required: false,
    },
    hire_data: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

const Realtor = mongoose.model('Realtor', realtorSchema)

export default Realtor
