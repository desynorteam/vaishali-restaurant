import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="botanical-bg flex flex-wrap justify-around p-20 gap-40 opacity-[0.03] fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <span className="material-symbols-outlined text-[300px]">eco</span>
                <span className="material-symbols-outlined text-[250px]">coffee</span>
                <span className="material-symbols-outlined text-[320px]">potted_plant</span>
                <span className="material-symbols-outlined text-[280px]">filter_vintage</span>
                <span className="material-symbols-outlined text-[300px]">local_cafe</span>
            </div>
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
        </div>
    );
};

export default PageLayout;
