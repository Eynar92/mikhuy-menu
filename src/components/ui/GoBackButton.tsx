'use client';
import { useRouter } from 'next/navigation'

export const GoBackButton = () => {

    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="px-10 py-3 w-full lg:w-auto text-xl text-center font-bold bg-amber-400 hover:bg-amber-300 rounded cursor-pointer transition-colors"
        >
            Volver
        </button>
    )
}
