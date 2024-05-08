import { Sidebar, Summary } from "@/components/order";
import { ToastNotification } from "@/components/ui";

export default function OrderLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="md:flex">
                <Sidebar />

                <main className="md:flex-1 md:h-dvh md:overflow-y-scroll p-5">
                    {children}
                </main>

                <Summary />
            </div>
            <ToastNotification />
        </>
    );
}