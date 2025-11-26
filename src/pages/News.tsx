import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Lakers Dominate Warriors in Historic Comeback",
      category: "NBA",
      date: "Oct 26, 2025",
      image: "🏀",
      excerpt: "An incredible fourth-quarter performance leads Lakers to victory",
    },
    {
      id: 2,
      title: "Indonesian Basketball League Announces New Season",
      category: "IBL",
      date: "Oct 25, 2025",
      image: "🏆",
      excerpt: "IBL 2026 season schedule revealed with exciting matchups",
    },
    {
      id: 3,
      title: "Young Indonesian Player Signs with NBA Team",
      category: "NBA",
      date: "Oct 24, 2025",
      image: "⭐",
      excerpt: "Historic moment for Indonesian basketball as talent goes global",
    },
    {
      id: 4,
      title: "FIBA World Cup Qualifiers: Indonesia vs Philippines",
      category: "FIBA",
      date: "Oct 23, 2025",
      image: "🌏",
      excerpt: "National team prepares for crucial qualifier match",
    },
    {
      id: 5,
      title: "Top 10 Dunks of the Week",
      category: "Highlights",
      date: "Oct 22, 2025",
      image: "💥",
      excerpt: "Watch the most spectacular dunks from around the globe",
    },
    {
      id: 6,
      title: "Basketball Training Tips from Pro Players",
      category: "Training",
      date: "Oct 21, 2025",
      image: "💪",
      excerpt: "Professional athletes share their workout routines and tips",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 pt-8">
      <h1 className="text-3xl font-bold mb-2 text-primary text-glow-cyan">Basketball News</h1>
      <p className="text-muted-foreground mb-6">Stay updated with the latest basketball stories</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsData.map((news) => (
          <Card
            key={news.id}
            className="overflow-hidden bg-card hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-6xl">
              {news.image}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary/20 text-primary border-0">{news.category}</Badge>
                <span className="text-xs text-muted-foreground">{news.date}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {news.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
