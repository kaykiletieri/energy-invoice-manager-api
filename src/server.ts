import Fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = Fastify({ logger: true });

app.listen(
    {
        port: 3000
    },
    () => console.log(`Server listening on port ${3000}`)
);