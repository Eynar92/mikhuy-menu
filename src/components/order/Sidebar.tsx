import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CategoryIcon, Logo } from "../ui";

async function getCategories() {
  return await prisma.category.findMany();
}

export const Sidebar = async () => {

  const categories = await getCategories();

  return (
    <aside className="flex flex-col md:w-72 md:h-dvh bg-white shadow-md">
      <Logo />
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
