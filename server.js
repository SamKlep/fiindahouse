import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Load env vars
dotenv.config()

// Connect to database
connectDB()

// Route files
import listingRoutes from './routes/listingRoutes.js'

const app = express()

// Body parser
app.use(express.json())

// Set static folder
app.use(express.static(path.join(import.meta.url, 'public')))

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/listings', listingRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
