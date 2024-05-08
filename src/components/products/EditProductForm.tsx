'use client'
import { createProduct, updateProduct } from "@/actions"
import { ProductSchema } from "@/schema"
import { useParams, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export const EditProductForm = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter();
    const params = useParams();
    const id = +params.id!;

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image'),
        }

        const result = ProductSchema.safeParse(data);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message);
            });
            return
        }

        const response = await updateProduct(result.data, id);
        if (response?.errors) {
            response.errors.forEach(issue => {
                toast.error(issue.message);
            });
            return;
        }

        toast.success('Producto Actualizado Correctamente');
        router.replace('/admin/products');
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
                    value="Guardar cambios"
                />
            </form>

        </div>
    )
}
