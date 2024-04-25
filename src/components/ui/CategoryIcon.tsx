import { categoryIcons } from "@/constants"
import { CategoryName } from "@/interfaces/orders"
import { Category } from "@prisma/client"
import Link from "next/link"

type CategoryIconProps = {
    category: Category
}

export const CategoryIcon = ({ category }: CategoryIconProps) => {

    const icon = category.name as CategoryName;

    return (
        <Link
            href={`/order/${category.slug}`}
            className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            {categoryIcons[icon]}
            <span className="text-xl font-bold">{category.name}</span>
        </Link>
    )
}
