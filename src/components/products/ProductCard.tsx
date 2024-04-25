import { ProductCardProps } from "@/interfaces/product"
import { formatCurrency } from "@/utils"
import Image from "next/image"



export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="h-full border bg-white rounded-lg overflow-hidden">
            <Image
                width={400}
                height={500}
                src={`/products/${product.image}.jpg`}
                alt={`Imagen platillo ${product.name}`}
                className="w-full h-auto"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <button
                    type="button"
                    className="w-full p-3 mt-5 text-white font-bold bg-indigo-600 hover:bg-indigo-800 rounded-md cursor-pointer transition-colors"
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}
