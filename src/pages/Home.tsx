import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pb-20 px-4">
      {/* Hero Section */}
      <section className="pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow-cyan">
          <TypewriterText text="Welcome to DRIBBL.ID" speed={80} />
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Indonesia's biggest basketball community! A place where passion meets the court.
        </p>
        
        {/* Hero Image Placeholder */}
        <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-secondary rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
          <div className="text-6xl">🏀</div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          <Button variant="outline" className="flex-shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </Button>
          <Button variant="outline" className="flex-shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Events
          </Button>
        </div>
      </section>

      {/* Featured Match */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Featured Match</h2>
        <Card className="p-5 bg-card border-primary/20 card-glow">
          <div className="flex justify-between items-center mb-3">
            <Badge variant="destructive" className="bg-live">LIVE</Badge>
            <span className="text-sm text-muted-foreground">Oct 26, 19:30</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <div className="w-16 h-16 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center text-2xl">
                🏀
              </div>
              <p className="font-bold">Lakers</p>
              <p className="text-3xl font-bold text-primary mt-2">98</p>
            </div>
            <div className="text-2xl font-bold text-muted-foreground">VS</div>
            <div className="text-center flex-1">
              <div className="w-16 h-16 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center text-2xl">
                ⚡
              </div>
              <p className="font-bold">Warriors</p>
              <p className="text-3xl font-bold text-primary mt-2">102</p>
            </div>
          </div>
          <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
            View Details
          </Button>
        </Card>
      </section>

      {/* Latest News Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">Latest News</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-4 bg-card hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-2xl">
                  📰
                </div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-primary/20 text-primary border-0">NBA</Badge>
                  <h3 className="font-bold mb-1 line-clamp-2">
                    Big Basketball News Title Goes Here
                  </h3>
                  <p className="text-xs text-muted-foreground">Oct 26, 2025</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
