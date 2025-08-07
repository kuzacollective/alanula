import { useNavigate } from "react-router-dom";
import { ChefHat, Image, PencilLine, Camera, Brush, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const categories = [
  {
    label: "Makeup Artist",
    icon: Brush,
    color: "from-primary/10 to-primary/20",
    iconClass: "text-primary",
  },
  {
    label: "Photographer",
    icon: Camera,
    color: "from-secondary/10 to-secondary/20",
    iconClass: "text-secondary",
  },
  {
    label: "Math Tutor",
    icon: PencilLine,
    color: "from-accent/10 to-accent/20",
    iconClass: "text-accent-foreground",
  },
  {
    label: "Chef",
    icon: ChefHat,
    color: "from-primary/10 to-primary/20",
    iconClass: "text-primary",
  },
  {
    label: "Hair Stylist",
    icon: Image,
    color: "from-secondary/10 to-secondary/20",
    iconClass: "text-secondary",
  },
  {
    label: "Massage Therapist",
    icon: Users,
    color: "from-accent/10 to-accent/20",
    iconClass: "text-accent-foreground",
  },
];

export default function PopularCategories() {
  const navigate = useNavigate();

  const handleCardClick = (category: string) => {
    navigate(`/services?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl font-bold font-poppins text-secondary text-center mb-8">
        Popular Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Card
            key={cat.label}
            role="button"
            tabIndex={0}
            className={`transition-all duration-200 hover-scale cursor-pointer shadow-sm bg-gradient-to-b ${cat.color} border border-border`}
            onClick={() => handleCardClick(cat.label)}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleCardClick(cat.label)}
            aria-label={`Browse ${cat.label}`}
          >
            <CardContent className="flex flex-col gap-1 items-center py-7">
              <cat.icon className={cat.iconClass} size={30} aria-hidden="true" />
              <span className="mt-3 font-bold font-poppins text-base text-foreground text-center">
                {cat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}