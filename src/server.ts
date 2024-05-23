import Fastify, { FastifyInstance } from 'fastify';
import { InvoiceRoutes } from './routes/invoice.routes';

const app: FastifyInstance = Fastify({ logger: true });

app.register(InvoiceRoutes, {
    prefix: '/api/v1/invoices'
});

app.listen(
    {
        port: 3000
    },
    () => console.log(`Server listening on port ${3000}`)
);