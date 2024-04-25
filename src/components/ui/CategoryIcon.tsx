'use client'
import { categoryIcons } from "@/constants"
import { CategoryName } from "@/interfaces/orders"
import { Category } from "@prisma/client"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: CategoryIconProps) => {

    const icon = category.name as CategoryName;

    const params = useParams<{ category: string }>();

    return (
        <Link
            href={`/order/${category.slug}`}
            className={`${category.slug === params.category ? 'bg-amber-400 pl-5 hover:bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b hover:bg-amber-50 transition-all`}
        >
            {categoryIcons[icon]}
            <span className="text-xl font-semibold">{category.name}</span>
        </Link>
    )
}
