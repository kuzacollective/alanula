
import { useNavigate } from "react-router-dom";
import { ChefHat, Image, PencilLine, Camera, Brush, Users, BookUser } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const categories = [
  {
    label: "Makeup Artist",
    icon: Brush,
    color: "from-pink-50 to-pink-100",
    iconClass: "text-pink-400",
  },
  {
    label: "Photographer",
    icon: Camera,
    color: "from-blue-50 to-blue-100",
    iconClass: "text-blue-500",
  },
  {
    label: "Math Tutor",
    icon: PencilLine,
    color: "from-green-50 to-green-100",
    iconClass: "text-green-500",
  },
  {
    label: "Chef",
    icon: ChefHat,
    color: "from-orange-50 to-orange-100",
    iconClass: "text-orange-400",
  },
  {
    label: "Hair Stylist",
    icon: Image,
    color: "from-purple-50 to-purple-100",
    iconClass: "text-purple-400",
  },
  {
    label: "Massage Therapist",
    icon: Users,
    color: "from-yellow-50 to-yellow-100",
    iconClass: "text-yellow-500",
  },
];

export default function PopularCategories() {
  const navigate = useNavigate();

  const handleCardClick = (category: string) => {
    navigate(`/services?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-10 bg-muted">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-secondary text-center mb-7">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-3 pb-3">
          {categories.map((cat) => (
            <Card
              key={cat.label}
              role="button"
              tabIndex={0}
              className={`transition-all duration-200 hover-scale cursor-pointer shadow-sm bg-gradient-to-b ${cat.color}`}
              onClick={() => handleCardClick(cat.label)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleCardClick(cat.label)}
              aria-label={`Browse ${cat.label}`}
            >
              <CardContent className="flex flex-col gap-1 items-center py-6">
                <cat.icon className={cat.iconClass} size={28} aria-hidden="true" />
                <span className="mt-2 font-bold font-poppins text-base text-secondary text-center">
                  {cat.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

