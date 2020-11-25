import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
// import users from './_data/users.js'
// import realtors from './_data/realtors.js'
import listings from './_data/listings.js'

// import User from './models/User.js'
// import Realtor from './models/Realtor.js'
import Listing from './models/Listing.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Listing.create(listings)
    // await Realtor.create(realtors)
    // await User.create(users)

    // const createdUsers = await User.insertMany(users)

    // const adminUser = createdUsers[0]._id

    // const sampleListings = listings.map((listing) => {
    //   return { ...listing, user: adminUser }
    // })

    // await Listing.insertMany(sampleListings)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Listing.deleteMany()
    // await Realtor.deleteMany()
    // await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
