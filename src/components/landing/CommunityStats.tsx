import React from "react";
import { Users, Star, MapPin, Briefcase, Award, TrendingUp } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    label: "Active Pros", 
    value: "25+",
    description: "Verified service providers",
    color: "text-blue-500"
  },
  { 
    icon: Briefcase, 
    label: "Services Listed", 
    value: "40+",
    description: "Different service categories",
    color: "text-green-500"
  },
  { 
    icon: MapPin, 
    label: "Cities Covered", 
    value: "15+",
    description: "Across Mauritius",
    color: "text-purple-500"
  },
  { 
    icon: Star, 
    label: "Average Rating", 
    value: "4.8★",
    description: "Customer satisfaction",
    color: "text-yellow-500"
  },
  { 
    icon: TrendingUp, 
    label: "Bookings Growth", 
    value: "+150%",
    description: "Month over month",
    color: "text-accent"
  },
  { 
    icon: Award, 
    label: "Success Rate", 
    value: "96%",
    description: "Completed projects",
    color: "text-primary"
  },
];

export default function CommunityStats() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">Growing Together</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our community of talented professionals and satisfied clients continues to grow every day
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map(({ icon: Icon, label, value, description, color }) => (
          <div key={label} className="group">
            <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
              <div className="mb-6">
                <Icon size={48} className={`mx-auto ${color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-poppins text-secondary mb-2">{value}</div>
              <div className="text-lg font-semibold text-primary mb-2">{label}</div>
              <div className="text-sm text-muted-foreground">{description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional context */}
      <div className="mt-16 text-center">
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
            Building Mauritius' Premier Service Marketplace
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From tutoring sessions in Curepipe to photography shoots in Grand Baie, 
            Alanula is connecting talented locals with clients who need their expertise. 
            Every booking helps build a stronger, more connected community.
          </p>
        </div>
      </div>
    </div>
  );
}