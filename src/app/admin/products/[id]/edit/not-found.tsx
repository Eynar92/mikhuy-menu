import { Heading } from "@/components/ui";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="text-center">
            <Heading>Producto No Encontrado</Heading>
            <Link
                href='/admin/products'
                replace
                className="px-10 py-3 w-full lg:w-auto text-xl text-center font-bold bg-amber-400 hover:bg-amber-300 text-black cursor-pointer rounded transition-colors"
            >
                Ir a Productos
            </Link>
        </div>
    )
}
