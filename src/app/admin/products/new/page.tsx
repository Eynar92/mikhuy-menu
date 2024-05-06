import { AddProductForm, ProductForm } from "@/components/products";
import { Heading } from "@/components/ui";

export default function NewProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}
