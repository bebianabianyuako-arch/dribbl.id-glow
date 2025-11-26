import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Players = () => {
  const players = [
    {
      id: 1,
      name: "LeBron James",
      team: "Lakers",
      position: "SF",
      points: 27.2,
      assists: 7.5,
      rebounds: 7.3,
      image: "👑",
    },
    {
      id: 2,
      name: "Stephen Curry",
      team: "Warriors",
      position: "PG",
      points: 29.4,
      assists: 6.1,
      rebounds: 5.0,
      image: "🏀",
    },
    {
      id: 3,
      name: "Kevin Durant",
      team: "Suns",
      position: "SF",
      points: 28.7,
      assists: 5.0,
      rebounds: 6.7,
      image: "⚡",
    },
    {
      id: 4,
      name: "Giannis Antetokounmpo",
      team: "Bucks",
      position: "PF",
      points: 31.1,
      assists: 5.7,
      rebounds: 11.8,
      image: "🦌",
    },
    {
      id: 5,
      name: "Luka Doncic",
      team: "Mavericks",
      position: "PG",
      points: 32.4,
      assists: 8.6,
      rebounds: 8.0,
      image: "⭐",
    },
    {
      id: 6,
      name: "Jayson Tatum",
      team: "Celtics",
      position: "SF",
      points: 26.9,
      assists: 4.9,
      rebounds: 8.1,
      image: "🍀",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-2 text-primary text-glow-cyan">Players</h1>
      <p className="text-muted-foreground mb-6">Browse basketball player statistics</p>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search players..."
          className="pl-10 bg-secondary border-border focus:border-primary"
        />
      </div>

      <div className="space-y-4">
        {players.map((player) => (
          <Card
            key={player.id}
            className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex-shrink-0 flex items-center justify-center text-3xl">
                {player.image}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.team}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-0">
                    {player.position}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">PTS</p>
                    <p className="text-lg font-bold text-primary">{player.points}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AST</p>
                    <p className="text-lg font-bold text-primary">{player.assists}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">REB</p>
                    <p className="text-lg font-bold text-primary">{player.rebounds}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Players;
