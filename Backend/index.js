const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const colors = require('colors')

const { PORT } = process.env

connectDB()

app.listen(PORT, () => {
    console.log(`Server is runnig on PORT:${PORT}`.bgBlue)
})
