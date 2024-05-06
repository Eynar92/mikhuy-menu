import { ProductCardProps } from "@/interfaces/product"
import { formatCurrency, getImagePath } from "@/utils"
import Image from "next/image"
import { AddProductBtn } from './AddProductBtn';


export const ProductCard = ({ product }: ProductCardProps) => {

    const imagePath = getImagePath(product.image);

    return (
        <div className="h-full border bg-white rounded-lg overflow-hidden">
            <Image
                width={400}
                height={500}
                src={imagePath}
                alt={`Imagen platillo ${product.name}`}
                className="w-full h-auto"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <AddProductBtn
                    product={product}
                />
            </div>
        </div>
    )
}
