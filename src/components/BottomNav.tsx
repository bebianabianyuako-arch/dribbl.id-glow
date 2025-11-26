import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Newspaper, PartyPopper, MoreHorizontal } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/matches", icon: Calendar, label: "Matches" },
    { to: "/news", icon: Newspaper, label: "News" },
    { to: "/events", icon: PartyPopper, label: "Events" },
    { to: "/others", icon: MoreHorizontal, label: "Others" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className={`text-xs ${isActive ? "font-semibold" : ""}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
