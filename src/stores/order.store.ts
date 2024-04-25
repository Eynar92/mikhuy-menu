import { OrderItem } from "@/interfaces/product";
import { Product } from "@prisma/client";
import { create } from "zustand";

interface OrderStore {
    order: OrderItem[];

    addToOrder: (product: Product) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({

    order: [],

    addToOrder: (product) => {

        const { categoryId, image, ...data } = product;

        set((state) => ({
            order: [...state.order, {
                ...data,
                quantity: 1,
                subtotal: 1 * data.price
            }]
        }))

    }

}));