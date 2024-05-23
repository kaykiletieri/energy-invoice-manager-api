import { IInvoiceRepository, Invoice, InvoiceInputDTO } from "../interfaces/invoice.interface";
import { InvoiceRepository } from "../repositories/invoice.repository";


class InvoiceUseCase {
    private invoiceRepository: IInvoiceRepository;

    constructor() {
        this.invoiceRepository = new InvoiceRepository();
    };

    async findAll(): Promise<Invoice[]> {
        return this.invoiceRepository.findAll();
    };

    async findById(id: number): Promise<Invoice | null> {
        return this.invoiceRepository.findById(id);
    };

    async create(invoice: InvoiceInputDTO): Promise<Invoice> {
        return this.invoiceRepository.create(invoice);
    };

    async update(id: number, invoice: InvoiceInputDTO): Promise<Invoice | null> {
        return this.invoiceRepository.update(id, invoice);
    }

    async delete(id: number): Promise<boolean> {
        return this.invoiceRepository.delete(id);
    };
}

export { InvoiceUseCase };