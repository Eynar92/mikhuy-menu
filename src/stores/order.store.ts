import { OrderItem } from "@/interfaces/product";
import { Product } from "@prisma/client";
import { create } from "zustand";

interface OrderStore {
    order: OrderItem[];

    addToOrder: (product: Product) => void;
    increaseQuantity: (id: Product['id']) => void;
    decreaseQuantity: (id: Product['id']) => void;
    removeItem: (id: Product['id']) => void;
    clearOrder: () => void;
}

export const useOrderStore = create<OrderStore>((set, get) => ({

    order: [],

    addToOrder: (product) => {

        let order: OrderItem[] = [];

        const { categoryId, image, ...data } = product;

        if (get().order.find(item => item.id === data.id)) {
            order = get().order.map(item => item.id === data.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),
            } : item);
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * data.price
            }];
        }
        set(() => ({
            order: order
        }));

    },

    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),
            } : item)
        }));
    },

    decreaseQuantity: (id) => {

        const order = get().order.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1),
        } : item);

        set(() => ({
            order: order
        }));
    },

    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }));
    },

    clearOrder: () => {
        set(() => ({
            order: [],
        }));
    }

}));