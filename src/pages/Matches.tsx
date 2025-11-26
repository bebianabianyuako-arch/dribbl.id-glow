import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Matches = () => {
  const [activeTab, setActiveTab] = useState("live");

  const matchData = [
    {
      id: 1,
      status: "live",
      date: "Oct 26, 19:30",
      homeTeam: "Lakers",
      awayTeam: "Warriors",
      homeScore: 98,
      awayScore: 102,
      homeIcon: "🏀",
      awayIcon: "⚡",
    },
    {
      id: 2,
      status: "scheduled",
      date: "Oct 27, 20:00",
      homeTeam: "Celtics",
      awayTeam: "Heat",
      homeScore: 0,
      awayScore: 0,
      homeIcon: "🍀",
      awayIcon: "🔥",
    },
    {
      id: 3,
      status: "finished",
      date: "Oct 25, 19:00",
      homeTeam: "Bulls",
      awayTeam: "Nets",
      homeScore: 110,
      awayScore: 105,
      homeIcon: "🐂",
      awayIcon: "🏀",
    },
  ];

  const filterMatches = (status: string) => {
    return matchData.filter((match) => match.status === status);
  };

  const MatchCard = ({ match }: { match: typeof matchData[0] }) => (
    <Card className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <Badge
          variant={match.status === "live" ? "destructive" : "secondary"}
          className={match.status === "live" ? "bg-live" : ""}
        >
          {match.status.toUpperCase()}
        </Badge>
        <span className="text-sm text-muted-foreground">{match.date}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center text-xl">
            {match.homeIcon}
          </div>
          <p className="font-bold text-sm">{match.homeTeam}</p>
          <p className={`text-2xl font-bold mt-2 ${match.status === "live" ? "text-primary" : ""}`}>
            {match.status !== "scheduled" ? match.homeScore : "-"}
          </p>
        </div>
        <div className="text-xl font-bold text-muted-foreground px-4">VS</div>
        <div className="text-center flex-1">
          <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center text-xl">
            {match.awayIcon}
          </div>
          <p className="font-bold text-sm">{match.awayTeam}</p>
          <p className={`text-2xl font-bold mt-2 ${match.status === "live" ? "text-primary" : ""}`}>
            {match.status !== "scheduled" ? match.awayScore : "-"}
          </p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-6 text-primary text-glow-cyan">Match Schedule</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-secondary">
          <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Live
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Scheduled
          </TabsTrigger>
          <TabsTrigger value="finished" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Finished
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-4">
          {filterMatches("live").map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
          {filterMatches("live").length === 0 && (
            <p className="text-center text-muted-foreground py-8">No live matches at the moment</p>
          )}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          {filterMatches("scheduled").map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </TabsContent>

        <TabsContent value="finished" className="space-y-4">
          {filterMatches("finished").map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Matches;
