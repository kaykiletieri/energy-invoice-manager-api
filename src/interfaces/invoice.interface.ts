export interface Invoice {
    id: number;
    clientNumber: string;
    referenceMonth: string;
    energyQuantity: number;
    energyValue: number;
    energySCEEEQuantity: number;
    energySCEEEValue: number;
    compensatedEnergyQuantity: number;
    compensatedEnergyValue: number;
    publicLightingContribution: number;
    createdAt: Date;
    updatedAt: Date;
};

export interface InvoiceInputDTO {
    clientNumber: string;
    referenceMonth: string;
    energyQuantity: number;
    energyValue: number;
    energySCEEEQuantity: number;
    energySCEEEValue: number;
    compensatedEnergyQuantity: number;
    compensatedEnergyValue: number;
    publicLightingContribution: number;
};

export interface IInvoiceRepository {
    findAll(): Promise<Invoice[]>;
    findById(id: number): Promise<Invoice | null>;
    
    create(invoice: InvoiceInputDTO): Promise<Invoice>;
    update(id: number, invoice: InvoiceInputDTO): Promise<Invoice | null>;
    delete(id: number): Promise<boolean>;
};