import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CategoryIcon } from "../ui";

async function getCategories() {
  return await prisma.category.findMany();
}

export const Sidebar = async () => {

  const categories = await getCategories();

  return (
    <aside className="flex flex-col md:w-72 md:h-dvh bg-white shadow-md">
      <h1 className="text-2xl py-5 text-center font-bold"><span className="text-3xl">M</span>ikhuy - <span className="text-3xl">M</span>enu</h1>
      <nav>
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
