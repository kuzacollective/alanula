import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

type Option = {
  label: string;
  value: string;
};

interface ServiceSearchBarProps {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  categories: Option[];
  locations: Option[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
}

export const ServiceSearchBar = ({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  categories,
  locations,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
}: ServiceSearchBarProps) => (
  <form
    className="
      flex flex-col gap-4 items-stretch mb-6
      md:flex-row    
      md:items-end
      md:gap-3
      animate-fade-in
    "
    role="search"
    aria-label="Service search and filters"
    tabIndex={0}
    onSubmit={e => {
      e.preventDefault();
      // optionally support submit-to-search if needed
    }}
  >
    <div className="flex flex-col gap-1 w-full md:w-[220px]">
      <Input
        aria-label="Search for a service, name or skill"
        placeholder="Search for a service, name or skill…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full bg-white dark:bg-card"
      />
    </div>
    
    <div className="flex flex-col gap-1 w-full md:w-[180px]">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full bg-white dark:bg-card" aria-label="Select category">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(opt => (
            <SelectItem value={opt.value} key={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    
    <div className="flex flex-col gap-1 w-full md:w-[160px]">
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full bg-white dark:bg-card" aria-label="Select location">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map(opt => (
            <SelectItem value={opt.value} key={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    
    <div className="flex flex-col gap-1 w-full md:min-w-[200px] md:w-auto">
      <label
        className="text-xs font-semibold text-muted-foreground"
        htmlFor="price-slider"
      >
        Price range (Rs)
      </label>
      <div className="flex items-center gap-3 px-1">
        <span className="text-sm text-muted-foreground min-w-[40px] text-center font-mono" aria-label="Minimum price">
          {priceRange[0]}
        </span>
        <div className="flex-1 px-2">
          <Slider
            id="price-slider"
            min={minPrice}
            max={maxPrice}
            step={50}
            value={priceRange}
            onValueChange={vals =>
              setPriceRange([vals[0], vals[1] ?? vals[0]])
            }
            className="w-full"
            aria-label={`Price range between ${minPrice} and ${maxPrice}`}
          />
        </div>
        <span className="text-sm text-muted-foreground min-w-[40px] text-center font-mono" aria-label="Maximum price">
          {priceRange[1]}
        </span>
      </div>
    </div>
  </form>
);