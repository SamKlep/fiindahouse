import mongoose from 'mongoose'
import slugify from 'slugify'

const listingSchema = mongoose.Schema({
  // realtor: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Realtor',
  //   required: true,
  // },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },

  address: {
    street: { type: String, required: [true, 'Please add an address'] },
    city: {
      type: String,
      required: [true, 'Please add a city'],
    },
    state: {
      type: String,
      required: [true, 'Please add a state'],
    },
    zipcode: {
      type: Number,
      required: [true, 'Please add a zipcode'],
    },
  },
  price: {
    type: Number,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  garage: {
    type: Number,
  },
  sqft: {
    type: Number,
  },
  lot_size: {
    type: Number,
  },
  photo_main: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_1: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_2: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_3: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_4: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_5: {
    type: String,
    default: 'no-photo.jpg',
  },
  photo_6: {
    type: String,
    default: 'no-photo.jpg',
  },
  is_Published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
})

// Create bootcamp slug from the name
listingSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

const Listing = mongoose.model('Listing', listingSchema)
export default Listing
