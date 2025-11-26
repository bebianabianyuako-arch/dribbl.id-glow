import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Shield, ChevronRight } from "lucide-react";

const Others = () => {
  const menuItems = [
    {
      to: "/players",
      icon: Users,
      label: "Players",
      description: "Browse basketball player statistics",
      color: "text-primary",
    },
    {
      to: "/teams",
      icon: Shield,
      label: "Teams",
      description: "Explore basketball teams",
      color: "text-cta",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-2 text-primary text-glow-cyan">Others</h1>
      <p className="text-muted-foreground mb-6">Explore more basketball content</p>

      <div className="space-y-4">
        {menuItems.map(({ to, icon: Icon, label, description, color }) => (
          <Link key={to} to={to}>
            <Card className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center ${color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Others;
