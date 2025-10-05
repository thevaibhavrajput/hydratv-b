import app from './src/app.js';
import Bun from 'bun';

Bun.serve({
  port: 3031,
  fetch: app.fetch,
});
