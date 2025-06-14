
import React from "react";

const stories = [
  {
    name: "Jean-Marc Dumas",
    summary: "“Through Ziada, I found 12 students in 1 month. My tutoring side hustle is now my main income source.”",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    category: "Math Tutor"
  },
];

export default function SuccessStories() {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold font-poppins text-primary mb-4 text-center md:text-left">
        Success Stories
      </h3>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        {stories.map(story => (
          <div
            key={story.name}
            className="bg-card rounded-xl shadow flex flex-col items-center p-5 max-w-xs animate-fade-in"
          >
            <img
              src={story.photo}
              alt={story.name}
              className="w-20 h-20 rounded-full border-2 border-primary mb-3 object-cover"
            />
            <div className="font-poppins font-semibold text-primary">{story.name}</div>
            <div className="text-xs text-muted-foreground mb-2">{story.category}</div>
            <blockquote className="text-center text-sm italic text-secondary-foreground">
              {story.summary}
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
