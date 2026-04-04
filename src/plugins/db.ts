import fp from 'fastify-plugin';

import { db } from '../config/db.js';

export default fp(async (fastify) => {
  try {
    await db.execute('SELECT 1');
    fastify.log.info('DB connected');
  } catch (err) {
    fastify.log.error('DB connection failed');
    throw err; // THIS STOPS SERVER START
  }
});
