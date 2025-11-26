import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="max-w-md mx-auto pt-16">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
