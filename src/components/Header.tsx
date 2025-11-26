import { User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="flex justify-between items-center h-16 max-w-md mx-auto px-4">
        <h1 className="text-xl font-bold text-primary text-glow-cyan">DRIBBL.ID</h1>
        <Link
          to="/profile"
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <User className="w-6 h-6 text-foreground" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
