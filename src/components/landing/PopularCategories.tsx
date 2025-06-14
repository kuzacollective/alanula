
import { Camera, Brush, BookUser, Users, Home } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const categories = [
  {
    name: "Makeup",
    icon: <Brush className="text-pink-400" size={28} />,
    color: "from-pink-50 to-pink-100",
  },
  {
    name: "Photography",
    icon: <Camera className="text-blue-500" size={28} />,
    color: "from-blue-50 to-blue-100",
  },
  {
    name: "CV Help",
    icon: <BookUser className="text-accent" size={28} />,
    color: "from-green-50 to-green-100",
  },
  {
    name: "Tutoring",
    icon: <Users className="text-purple-500" size={28} />,
    color: "from-purple-50 to-purple-100",
  },
  {
    name: "House Help",
    icon: <Home className="text-yellow-500" size={28} />,
    color: "from-yellow-50 to-yellow-100",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-10 bg-muted">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-secondary text-center mb-7">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-3 pb-3">
          {categories.map((cat) => (
            <Card key={cat.name} className={`transition-all duration-200 shadow-sm bg-gradient-to-b ${cat.color} hover:scale-105`}>
              <CardContent className="flex flex-col gap-1 items-center py-6">
                <div>{cat.icon}</div>
                <span className="mt-2 font-bold font-poppins text-base text-secondary">{cat.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
