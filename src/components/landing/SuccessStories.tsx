import React from "react";

const stories = [
  {
    name: "Jean-Marc Dumas",
    summary: "Through Alanula, I found 12 students in 1 month. My tutoring side gig is now my main income source.",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    category: "Math Tutor",
  },
  {
    name: "Lina Chun",
    summary: "I started as a part-time makeup artist, but thanks to Alanula, now it's a full-time gig!",
    photo: "https://randomuser.me/api/portraits/women/69.jpg",
    category: "Makeup Artist",
  },
  {
    name: "Krish Poolalah",
    summary: "Photography bookings doubled after joining Alanula. I can focus on my art, not marketing!",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    category: "Photographer",
  },
  {
    name: "Ria Sofa",
    summary: "I used Alanula to launch my yoga classes for kids and already got 8 new regulars.",
    photo: "https://randomuser.me/api/portraits/women/58.jpg",
    category: "Yoga Instructor",
  },
];

export default function SuccessStories() {
  return (
    <div className="py-12 md:py-16">
      <h3 className="text-3xl font-bold font-poppins text-primary mb-8 text-center">
        Success Stories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {stories.map(story => (
          <div
            key={story.name}
            className="bg-card rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300 flex flex-col items-center p-6 animate-fade-in"
          >
            <img
              src={story.photo}
              alt={story.name}
              className="w-20 h-20 rounded-full border-2 border-primary mb-3 object-cover"
            />
            <div className="font-poppins font-semibold text-primary">{story.name}</div>
            <div className="text-xs text-foreground/60 mb-2">{story.category}</div>
            <blockquote className="text-center text-sm italic text-foreground/70 leading-relaxed">
              "{story.summary}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}