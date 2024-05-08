import { Order, OrderProducts, Product } from "@prisma/client"

export interface ProductCardProps {
    product: Product
}

export interface AddProductButtonProps {
    product: Product;
}

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}