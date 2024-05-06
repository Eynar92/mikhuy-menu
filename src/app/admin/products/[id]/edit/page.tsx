import { GoBackButton, Heading } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditProductForm } from '../../../../../components/products/EditProductForm';
import { ProductForm } from "@/components/products";

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id: id,
        },
    });

    return product;
}

export default async function EditProductPage({ params }: { params: { id: string } }) {

    const product = await getProductById(+params.id);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Heading>Editar Producto: {product.name}</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm
                    product={product}
                />
            </EditProductForm>
        </>
    )
}
