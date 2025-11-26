import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Jakarta Street Basketball Tournament",
      date: "Nov 15, 2025",
      location: "GBK Arena, Jakarta",
      participants: 128,
      image: "🏀",
    },
    {
      id: 2,
      title: "Dribbl.ID Meetup Surabaya",
      date: "Nov 20, 2025",
      location: "Surabaya Sports Hall",
      participants: 64,
      image: "🤝",
    },
    {
      id: 3,
      title: "Youth Basketball Camp",
      date: "Dec 1-5, 2025",
      location: "Bandung Training Center",
      participants: 50,
      image: "⛹️",
    },
    {
      id: 4,
      title: "3x3 Basketball Championship",
      date: "Dec 10, 2025",
      location: "Mall of Indonesia, Jakarta",
      participants: 96,
      image: "🏆",
    },
    {
      id: 5,
      title: "Basketball Clinic with Pros",
      date: "Dec 15, 2025",
      location: "Senayan Sports Center",
      participants: 40,
      image: "⭐",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary text-glow-cyan">Events</h1>
          <p className="text-muted-foreground mt-1">Join basketball events near you</p>
        </div>
        <Button size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground">
          Create
        </Button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="p-5 bg-card hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-3xl">
                {event.image}
              </div>
              <div className="flex-1">
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
              </div>
            </div>
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              Register
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
