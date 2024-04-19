import { Hono } from 'hono'
import { authRoutes } from './routes/login.js'

const app = new Hono().basePath('/api')

app.route('/login', authRoutes)

export default app
