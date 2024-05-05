import { ProductSearchForm, ProductsTable } from "@/components/products";
import { Heading } from "@/components/ui";
import { prisma } from "@/lib/prisma";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive',
            }
        },
        include: {
            category: true,
        }
    });

    return products;
}

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

    const products = await searchProducts(searchParams.search);

    return (
        <>
            <Heading>Resultados de búsqueda: {searchParams.search}</Heading>

            <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                <ProductSearchForm />
            </div>

            {products.length ? (
                <ProductsTable products={products} />

            ) : (
                <p className="text-center text-lg mt-20">No hay resultados</p>
            )}

        </>
    )
}
