import { Hono } from "hono";
import { serve } from "bun";
import { serveStatic } from "hono/bun";

const PORT = 3001

const app = new Hono();

app.use('/*', serveStatic({ root: './frontend/' }));
app.get('*', serveStatic({ path: './frontend/index.html' }));

console.log("Running server on port: 3001");

serve({ port: PORT, fetch: app.fetch })
