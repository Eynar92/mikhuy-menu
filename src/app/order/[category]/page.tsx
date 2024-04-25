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
    <div className="flex flex-col gap-3">{products.map(product => (<span key={product.id}>{product.name}</span>))}</div>
  )
}
