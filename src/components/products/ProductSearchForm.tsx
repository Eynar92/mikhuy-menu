'use client'
import { SearchSchema } from "@/schema"
import { redirect, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export const ProductSearchForm = () => {

    const router = useRouter()

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search'),
        }

        const result = SearchSchema.safeParse(data);
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message);
            });
            return;
        }

        router.push(`/admin/products/search?search=${result.data.search}`);
    }

    return (
        <form
            action={handleSearchForm}
            className="flex items-center overflow-hidden"
        >
            <input
                type="text"
                placeholder="Buscar Producto"
                className="p-2 placeholder-gray-400 w-full rounded-l"
                name="search"
            />

            <input
                type="submit"
                value={'Buscar'}
                className="bg-indigo-600 p-2 uppercase text-white cursor-pointer rounded-r"
            />
        </form>
    )
}
