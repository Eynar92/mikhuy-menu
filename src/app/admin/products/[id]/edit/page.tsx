import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

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

    console.log(product);

    return (
        <div>EditProductPage</div>
    )
}
