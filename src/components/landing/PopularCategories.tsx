import { useNavigate } from "react-router-dom";
import { ChefHat, Image, PencilLine, Camera, Brush, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const categories = [
  {
    label: "Makeup Artist",
    icon: Brush,
    color: "from-pink-50 to-pink-100",
    iconClass: "text-pink-500",
    textClass: "text-pink-800 dark:text-pink-900"
  },
  {
    label: "Photographer",
    icon: Camera,
    color: "from-blue-50 to-blue-100",
    iconClass: "text-blue-500",
    textClass: "text-blue-800 dark:text-blue-900"
  },
  {
    label: "Math Tutor",
    icon: PencilLine,
    color: "from-green-50 to-green-100",
    iconClass: "text-green-500",
    textClass: "text-green-800 dark:text-green-900"
  },
  {
    label: "Chef",
    icon: ChefHat,
    color: "from-orange-50 to-orange-100",
    iconClass: "text-orange-500",
    textClass: "text-orange-800 dark:text-orange-900"
  },
  {
    label: "Hair Stylist",
    icon: Image,
    color: "from-purple-50 to-purple-100",
    iconClass: "text-purple-500",
    textClass: "text-purple-800 dark:text-purple-900"
  },
  {
    label: "Massage Therapist",
    icon: Users,
    color: "from-yellow-50 to-yellow-100",
    iconClass: "text-yellow-600",
    textClass: "text-yellow-800 dark:text-yellow-900"
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
            className={`transition-all duration-200 hover-scale cursor-pointer shadow-sm bg-gradient-to-b ${cat.color} hover:shadow-lg`}
            onClick={() => handleCardClick(cat.label)}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleCardClick(cat.label)}
            aria-label={`Browse ${cat.label}`}
          >
            <CardContent className="flex flex-col gap-1 items-center py-7">
              <cat.icon className={cat.iconClass} size={30} aria-hidden="true" />
              <span className={`mt-3 font-bold font-poppins text-base text-center ${cat.textClass}`}>
                {cat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}