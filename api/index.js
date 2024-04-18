import { handle } from 'hono/vercel'
import app from './app.js'

export const runtime = 'edge'

export default handle(app)
