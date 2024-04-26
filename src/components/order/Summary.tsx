'use client';

import { useOrderStore } from "@/stores/order.store";
import { ProductDetails } from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/utils";

export const Summary = () => {

    const order = useOrderStore((state) => state.order);
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <aside className="lg:h-dvh lg:overflow-y-scroll md:w-64 lg:w-96 p-5 shadow-md">
            <h1 className="text-3xl text-center font-bold">Mi pedido</h1>
            {order.length === 0 ? (
                <p className="text-center my-10">El carrito esta vacío</p>
            ) : (
                <div className="mt-5">
                    {order.map(item => (
                        <ProductDetails
                            key={item.id}
                            item={item}
                        />
                    ))}

                    <p className="text-2xl mt-20 text-center">
                        Total a pagar: {''}
                        <span className="font-bold">{formatCurrency(total)}</span>
                    </p>
                </div>
            )}
        </aside>
    )
}
