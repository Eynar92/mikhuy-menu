'use client';

import { useOrderStore } from "@/stores/order.store";
import { ProductDetails } from "./ProductDetails";

export const Summary = () => {

    const order = useOrderStore((state) => state.order);

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
                </div>
            )}
        </aside>
    )
}
