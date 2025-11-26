import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const Explore = () => {
  const events = [
    {
      id: 1,
      title: "Jakarta Street Basketball Tournament",
      date: "Nov 15, 2025",
      location: "GBK Arena, Jakarta",
      participants: 128,
    },
    {
      id: 2,
      title: "Dribbl.ID Meetup Surabaya",
      date: "Nov 20, 2025",
      location: "Surabaya Sports Hall",
      participants: 64,
    },
    {
      id: 3,
      title: "Youth Basketball Camp",
      date: "Dec 1-5, 2025",
      location: "Bandung Training Center",
      participants: 50,
    },
  ];

  const teams = [
    { id: 1, name: "Golden State Warriors", region: "United States", icon: "⚡" },
    { id: 2, name: "Los Angeles Lakers", region: "United States", icon: "🏀" },
    { id: 3, name: "Boston Celtics", region: "United States", icon: "🍀" },
    { id: 4, name: "Satria Muda Jakarta", region: "Indonesia", icon: "🇮🇩" },
    { id: 5, name: "Pelita Jaya", region: "Indonesia", icon: "⭐" },
    { id: 6, name: "Prawira Bandung", region: "Indonesia", icon: "🏆" },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-6 text-primary text-glow-cyan">Explore</h1>

      {/* Events Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground">
            Create Event
          </Button>
        </div>
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer">
              <h3 className="font-bold text-lg mb-3">{event.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{event.participants} participants</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Register
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Teams Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Teams</h2>
        <div className="grid grid-cols-2 gap-4">
          {teams.map((team) => (
            <Card
              key={team.id}
              className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-secondary rounded-full flex items-center justify-center text-3xl">
                {team.icon}
              </div>
              <h3 className="font-bold text-sm mb-2 line-clamp-2">{team.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {team.region}
              </Badge>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
