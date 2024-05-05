import { ProductForm } from "./ProductForm"

export const AddProductForm = () => {
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form
                className="space-y-5"
            >

                <ProductForm />

                <input
                    type="submit"
                    className="w-full p-3 mt-5 text-white font-bold bg-indigo-600 hover:bg-indigo-800 rounded-md uppercase cursor-pointer transition-colors"
                    value="Registrar Producto"
                />
            </form>

        </div>
    )
}
