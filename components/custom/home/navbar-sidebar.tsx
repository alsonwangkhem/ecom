import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";

interface NavItem {
    title: string;
    href: string;
}

interface NavbarSidebarProps {
    items: NavItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export default function NavbarSidebar({
    items,
    open,
    onOpenChange
}: NavbarSidebarProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="flex flex-col">
                <SheetHeader className="border-b">
                    <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col flex-1">
                    {items.map((item) => (
                        <Button asChild variant="outline" key={item.title} className="justify-start w-full bg-white text-black border-0 border-b h-16 hover:bg-black hover:text-white transition-all duration-300">
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col">
                    <Button asChild variant="outline" className="border-0 border-t w-full h-12 justify-start bg-white text-black hover:bg-ecom-primary hover:text-white transition-all duration-300">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-0 border-t w-full h-12 justify-start bg-black text-white hover:bg-ecom-primary hover:text-white transition-all duration-300">
                        <Link href="/register">Start Selling</Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}