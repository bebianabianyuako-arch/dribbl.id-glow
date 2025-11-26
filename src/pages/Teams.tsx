import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Golden State Warriors",
      region: "United States",
      conference: "Western",
      founded: "1946",
      championships: 7,
      icon: "⚡",
      description: "The Golden State Warriors are a professional basketball team based in San Francisco, California.",
    },
    {
      id: 2,
      name: "Los Angeles Lakers",
      region: "United States",
      conference: "Western",
      founded: "1947",
      championships: 17,
      icon: "🏀",
      description: "The Lakers are one of the most successful teams in the history of the NBA.",
    },
    {
      id: 3,
      name: "Boston Celtics",
      region: "United States",
      conference: "Eastern",
      founded: "1946",
      championships: 17,
      icon: "🍀",
      description: "The Celtics are a professional basketball team in the NBA's Eastern Conference.",
    },
    {
      id: 4,
      name: "Satria Muda Jakarta",
      region: "Indonesia",
      conference: "IBL",
      founded: "1989",
      championships: 8,
      icon: "🇮🇩",
      description: "Satria Muda is one of Indonesia's most successful basketball teams.",
    },
    {
      id: 5,
      name: "Pelita Jaya",
      region: "Indonesia",
      conference: "IBL",
      founded: "1987",
      championships: 6,
      icon: "⭐",
      description: "Pelita Jaya is a prominent team in the Indonesian Basketball League.",
    },
    {
      id: 6,
      name: "Prawira Bandung",
      region: "Indonesia",
      conference: "IBL",
      founded: "2003",
      championships: 4,
      icon: "🏆",
      description: "Prawira Bandung represents the city of Bandung in the IBL.",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary text-glow-cyan">Teams</h1>
          <p className="text-muted-foreground mt-1">Explore basketball teams</p>
        </div>
        <Button size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground">
          Add Team
        </Button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search teams..."
          className="pl-10 bg-secondary border-border focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {teams.map((team) => (
          <Card
            key={team.id}
            className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-4xl">
                {team.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{team.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {team.region}
                  </Badge>
                  <Badge className="bg-primary/20 text-primary border-0 text-xs">
                    {team.conference}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {team.championships} 🏆
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {team.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">Founded: {team.founded}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;
