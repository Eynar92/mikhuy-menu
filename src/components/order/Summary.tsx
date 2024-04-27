'use client';

import { useOrderStore } from "@/stores/order.store";
import { ProductDetails } from "./ProductDetails";
import { useMemo, useState } from "react";
import { formatCurrency } from "@/utils";
import { createOrder } from "@/actions";
import { OrderSchema } from "@/schema";
import { toast } from "react-toastify";

export const Summary = () => {

    const order = useOrderStore((state) => state.order);
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const clearOrder = useOrderStore((state) => state.clearOrder);

    const [loading, setLoading] = useState(false);

    const handleCreateOrder = async (formData: FormData) => {
        setLoading(true);
        console.log('Loading 1: ', loading);
        const data = {
            name: formData.get('name'),
            total: total,
            order
        }

        const result = OrderSchema.safeParse(data);
        if (!result.success) {
            result.error.issues.forEach((issue) => {
                toast.error(issue.message);
            });
            return;
        }

        const response = await createOrder(data);
        if (response?.errors) {
            response.errors.forEach((issue) => {
                toast.error(issue.message);
            });
        }
        console.log('Loading 2: ', loading);

        toast.success('Pedido realizado correctamente');
        clearOrder();
        setLoading(false);
    }

    return (
        <aside className="lg:h-dvh lg:overflow-y-scroll md:w-64 lg:w-96 p-5 shadow-md">
            <h1 className="text-3xl text-center font-bold">Mi pedido</h1>
            {order.length === 0 ? (
                <p className="text-center my-10">El pedido esta vacío</p>
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

                    <form
                        action={handleCreateOrder}
                        className="w-full mt-10 space-y-5"
                    >
                        <input
                            type="text"
                            placeholder="Tu Nombre"
                            className="p-2 bg-white border border-gray-100 rounded w-full"
                            name="name"
                        />

                        <input
                            type="submit"
                            className="py-2 w-full text-center text-white font-bold bg-black rounded uppercase cursor-pointer disabled:bg-gray-600"
                            value="Confirmar Pedido"
                            disabled={loading}
                        />
                    </form>
                </div>
            )}
        </aside>
    )
}
