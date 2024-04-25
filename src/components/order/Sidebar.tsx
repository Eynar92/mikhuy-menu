import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CategoryIcon } from "../ui";

async function getCategories() {
  return await prisma.category.findMany();
}

export const Sidebar = async () => {

  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-dvh bg-white shadow-md">
      <h1>Mikhuy - Menú</h1>
      <nav className="mt-10">
        {
          categories.map(category => (
            <CategoryIcon
              key={category.id}
              category={category}
            />
          ))
        }
      </nav>
    </aside>
  )
}
