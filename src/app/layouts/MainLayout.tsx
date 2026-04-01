import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/navigation/components/Navbar";
import { Footer } from "../../features/navigation/components/Footer";
import { ScrollToHash } from "../router/ScrollToHash";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-foreground">
      <Navbar />
      <ScrollToHash />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}