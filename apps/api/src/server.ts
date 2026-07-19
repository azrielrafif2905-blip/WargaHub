import Fastify from 'fastify';
import { prisma } from './db/prisma.js';

const fastify = Fastify({
  logger: false,
});

fastify.get('/health', async (request, reply) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return {
      status: 'ok',
      database: 'connected',
    };
  } catch (error) {
    reply.code(503);

    return {
      status: 'error',
      message: 'Database unavailable',
    };
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
