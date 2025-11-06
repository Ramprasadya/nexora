import express from  'express'
import 'dotenv/config'
const app = express()
const port = 4000
import { connectDB } from './db/db.js'
import ProductRoute from './routes/ProductRoute.js'
connectDB()
app.use(express.json())

app.get('/debug', (req, res) => {
  res.send('Backend is running')
})

app.use("/api",ProductRoute)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
