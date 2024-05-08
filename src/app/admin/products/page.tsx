import { ProductsPagination, ProductSearchForm, ProductsTable } from "@/components/products";
import { Heading } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productCount() {
    return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const products = await prisma.product.findMany({
        take: pageSize,
        skip: skip,
        include: {
            category: true,
        }
    });

    return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({ searchParams }: { searchParams: { page: string } }) {

    const page = +searchParams.page || 1;

    const pageSize = 10;

    if (page < 0) redirect('/admin/products');

    const productsData = getProducts(page, pageSize);
    const totalProductsData = productCount();
    const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
    const totalPages = Math.ceil(totalProducts / pageSize);

    if (page > totalPages) redirect('/admin/products');

    return (
        <>
            <Heading>Administrar Productos</Heading>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                <Link
                    href={'/admin/products/new'}
                    className="px-10 py-3 w-full lg:w-auto text-xl text-center font-bold bg-amber-400 hover:bg-amber-300 rounded cursor-pointer transition-colors"
                >
                    Crear Producto
                </Link>

                <ProductSearchForm />
            </div>

            <ProductsTable
                products={products}
            />

            <ProductsPagination
                page={page}
                totalPages={totalPages}
            />
        </>
    )
}
