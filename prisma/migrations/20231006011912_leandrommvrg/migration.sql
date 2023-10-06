-- CreateTable
CREATE TABLE "AutorModel" (
    "id" SERIAL NOT NULL,
    "cedulautor" TEXT NOT NULL,
    "nombreautor" TEXT NOT NULL,
    "correoautor" TEXT NOT NULL,

    CONSTRAINT "AutorModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneroModel" (
    "id" SERIAL NOT NULL,
    "generoliterario" TEXT NOT NULL,
    "AutorId" INTEGER NOT NULL,

    CONSTRAINT "GeneroModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NacionalidadModel" (
    "id" SERIAL NOT NULL,
    "nombrepais" TEXT NOT NULL,
    "nombreciudad" TEXT NOT NULL,
    "AutorIdNa" INTEGER NOT NULL,

    CONSTRAINT "NacionalidadModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutorModel_cedulautor_key" ON "AutorModel"("cedulautor");

-- AddForeignKey
ALTER TABLE "GeneroModel" ADD CONSTRAINT "GeneroModel_AutorId_fkey" FOREIGN KEY ("AutorId") REFERENCES "AutorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NacionalidadModel" ADD CONSTRAINT "NacionalidadModel_AutorIdNa_fkey" FOREIGN KEY ("AutorIdNa") REFERENCES "AutorModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
