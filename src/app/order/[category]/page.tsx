import { ProductCard } from "@/components/products";
import { Heading } from "@/components/ui";
import { prisma } from "@/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  });

  return products;
}

export default async function OrderPage({ params }: { params: { category: string } }) {

  const products = await getProducts(params.category);

  return (
    <>
      <Heading>
        Elige y personaliza tu pedido a continuación
      </Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start animate-fade">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}
