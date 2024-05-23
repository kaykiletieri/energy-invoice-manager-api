import { prisma } from '../database/prisma-client';
import { IInvoiceRepository, InvoiceInputDTO } from '../interfaces/invoice.interface';

class InvoiceRepository implements IInvoiceRepository {
    async findAll() {
        return await prisma.invoice.findMany();
    };

    async findById(id: number) {
        return await prisma.invoice.findFirst({
            where: {
                id: id
            }
        });
    };

    async create(invoice: InvoiceInputDTO) {
        return await prisma.invoice.create({
            data: invoice
        });
    };

    async update(id: number, invoice: InvoiceInputDTO) {
        return await prisma.invoice.update({
            where: {
                id: id
            },
            data: invoice
        });
    };

    async delete(id: number) {
        await prisma.invoice.delete({
            where: {
                id: id
            }
        });

        return true;
    };
};

export { InvoiceRepository };