'use client'
import { ProductSchema } from "@/schema"
import { toast } from "react-toastify"

export const AddProductForm = ({ children }: { children: React.ReactNode }) => {

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId')
        }

        const result = ProductSchema.safeParse(data);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message);
            });
        }

    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                action={handleSubmit}
                className="space-y-5"
            >

                {children}

                <input
                    type="submit"
                    className="w-full p-3 mt-5 text-white font-bold bg-indigo-600 hover:bg-indigo-800 rounded-md uppercase cursor-pointer transition-colors"
                    value="Registrar Producto"
                />
            </form>

        </div>
    )
}
