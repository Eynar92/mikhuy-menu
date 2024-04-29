'use client';

import { useFormStatus } from "react-dom";

export const OrderCardButton = () => {

    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="flex items-center justify-center gap-4 py-2 w-full text-center text-white font-bold bg-indigo-600 hover:bg-indigo-800 rounded uppercase cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
            disabled={pending}
        >
            {pending && <span className="loader"></span>} Marcar Orden Completada
        </button>
    )
}
