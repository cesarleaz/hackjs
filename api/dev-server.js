import 'dotenv/config'
import { serve } from '@hono/node-server'
import app from './app.js'

const { PORT = 3000 } = process.env

serve({ port: PORT, fetch: app.fetch }, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
