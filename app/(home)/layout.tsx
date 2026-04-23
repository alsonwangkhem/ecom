import Navbar from "@/components/custom/home/navbar";
import Footer from "@/components/custom/home/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-1">
        {children}
    </div>
    <Footer />
    </div>
    );
}