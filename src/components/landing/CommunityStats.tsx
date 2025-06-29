import React from "react";
import { Users, Target, MapPin, Briefcase, Award, TrendingUp } from "lucide-react";

const goals = [
  { 
    icon: Users, 
    label: "Our Goal", 
    value: "500+",
    description: "Verified service providers",
    color: "text-blue-500"
  },
  { 
    icon: Briefcase, 
    label: "Service Categories", 
    value: "50+",
    description: "Different specialties planned",
    color: "text-green-500"
  },
  { 
    icon: MapPin, 
    label: "Coverage Area", 
    value: "All",
    description: "Districts in Mauritius",
    color: "text-purple-500"
  },
  { 
    icon: Target, 
    label: "Launch Target", 
    value: "Q1 2025",
    description: "Platform goes live",
    color: "text-yellow-500"
  },
  { 
    icon: Award, 
    label: "Quality Standard", 
    value: "100%",
    description: "Verified professionals only",
    color: "text-primary"
  },
  { 
    icon: TrendingUp, 
    label: "Community Focus", 
    value: "Local",
    description: "Mauritian talent first",
    color: "text-accent"
  },
];

export default function CommunityStats() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-4">Our Vision for Mauritius</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're building something special—a platform that will transform how Mauritians connect with local services
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.map(({ icon: Icon, label, value, description, color }) => (
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

      {/* Vision statement */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-poppins text-secondary mb-4">
            Join Us in Building Mauritius' Future
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            From the bustling streets of Port Louis to the scenic landscapes of the South, 
            we're creating a platform that celebrates and empowers local talent. 
            Be part of the movement that puts Mauritian entrepreneurs first.
          </p>
          <a 
            href="/join" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </div>
  );
}