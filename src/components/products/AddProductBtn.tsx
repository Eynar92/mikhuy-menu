'use client';

import { AddProductButtonProps } from "@/interfaces/product";
import { useOrderStore } from "@/stores/order.store";

export const AddProductBtn = ({ product }: AddProductButtonProps) => {

    const addToOrder = useOrderStore(state => state.addToOrder);

    return (
        <button
            type="button"
            className="w-full p-3 mt-5 text-white font-bold bg-indigo-600 hover:bg-indigo-800 rounded-md cursor-pointer transition-colors"
            onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    )
}
