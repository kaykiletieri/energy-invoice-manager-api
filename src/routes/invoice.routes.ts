import { FastifyInstance } from "fastify";
import { InvoiceUseCase } from "../usecases/invoice.usecase";
import { InvoiceInputDTO } from "../interfaces/invoice.interface";

export async function InvoiceRoutes(fastify: FastifyInstance) {

    const invoiceUseCase = new InvoiceUseCase();

    fastify.get('/', async (_request, reply) => {
        try {
            return await invoiceUseCase.findAll();
        }
        catch (error) {
            return reply.status(500).send({ error: 'Internal Server Error' });
        }
    });

    fastify.get('/:id', async (request, reply) => {
        try {
            const invoiceId = request.headers['id'];
            const invoice =  await invoiceUseCase.findById(invoiceId);
            if (!invoice || invoice === null) {
                return reply.status(404).send({ error: 'Invoice not found' });
            }
            return invoice;
        }
        catch (error) {
            return reply.status(500).send({ error: 'Internal Server Error' });
        }
    });

    fastify.post<{ Body: InvoiceInputDTO}>('/', async (request, reply) => {
        try {
            return await invoiceUseCase.create(request.body);
        }
        catch (error) {
            return reply.status(500).send({ error: error });
        }
    });

    fastify.put<{ Body: InvoiceInputDTO }>('/:id', async (request, reply) => {
        try {
            const invoiceId = request.headers['id'];
            return await invoiceUseCase.update(invoiceId, request.body);
        }
        catch (error) {
            return reply.status(500).send({ error: 'Internal Server Error' });
        }
    });

    fastify.delete('/invoices/:id', async (request, reply) => {
        try {
            const invoiceId = request.headers['id'];
            return await invoiceUseCase.delete(invoiceId);
        }
        catch (error) {
            return reply.status(500).send({ error: 'Internal Server Error' });
        }
    });
};