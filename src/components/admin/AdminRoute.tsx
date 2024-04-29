'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRouteProps = {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export const AdminRoute = ({ link }: AdminRouteProps) => {

    const pathname = usePathname();

    return (
        <Link
            href={link.url}
            className={`${link.url === pathname ? 'bg-amber-400 pl-5 hover:bg-amber-400' : ''} font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b hover:bg-amber-50 transition-all`}
            target={link.blank ? '_blank' : ''}
        >
            {link.text}
        </Link>
    )
}
