import { Hono } from 'hono'
import { magic } from '../magic.js'

export const authRoutes = new Hono()

authRoutes.post('/', async (c) => {
    try {
        const didToken = c.req.header('Authorization')?.substr(7);
        await magic.token.validate(didToken);
        return c.json({ authenticated: true });
    } catch (error) {
        return c.json({ error: error.message }, 500);
    }
});
