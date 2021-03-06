import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import errorHandler from './middleware/error.js'
import connectDB from './config/db.js'

// Load env vars
dotenv.config()

// Connect to database
connectDB()

// Route files
import listingRoutes from './routes/listingRoutes.js'
import realtorRoutes from './routes/realtorRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')) // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'))
  })
  console.log('Serving React App...')
}

// Body parser
app.use(express.json())

// Dev logging middlware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Set static folder
app.use(express.static(path.join(import.meta.url, 'public')))

app.use('/api/listings', listingRoutes)
app.use('/api/realtors', realtorRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
