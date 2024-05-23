-- CreateTable
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "clientNumber" TEXT NOT NULL,
    "referenceMonth" TEXT NOT NULL,
    "energyQuantity" DOUBLE PRECISION NOT NULL,
    "energyValue" DOUBLE PRECISION NOT NULL,
    "energySCEEEQuantity" DOUBLE PRECISION NOT NULL,
    "energySCEEEValue" DOUBLE PRECISION NOT NULL,
    "compensatedEnergyQuantity" DOUBLE PRECISION NOT NULL,
    "compensatedEnergyValue" DOUBLE PRECISION NOT NULL,
    "publicLightingContribution" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);
