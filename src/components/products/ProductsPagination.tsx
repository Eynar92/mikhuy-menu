import Link from "next/link"

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

export const ProductsPagination = ({ page, totalPages }: ProductsPaginationProps) => {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    console.log(pages);


    return (
        <nav className="flex justify-center py-10">
            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-100 transition-all"
                >&laquo;</Link>
            )}

            {pages.map(currentPage => (
                <Link
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage ? 'font-black bg-amber-400 text-amber-800 ring-amber-400' : 'bg-white text-gray-900 ring-gray-300 hover:bg-amber-50'} px-4 py-2 text-sm ring-1 ring-inset focus:z-20 focus:outline-offset-0  transition-all`}
                >
                    {currentPage}
                </Link>
            ))}

            {page < totalPages && (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-100 transition-all"
                >&raquo;</Link>
            )}
        </nav>
    )
}
