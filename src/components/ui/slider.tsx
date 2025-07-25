
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    // Removed "touch-none" so touch events work!
    className={cn(
      "relative flex w-full select-none items-center", // No 'touch-none', allow touch
      className
    )}
    {...props}
  >
    {/* Increased track height for easier touch, responsive adjustment */}
    <SliderPrimitive.Track className="relative h-3 md:h-2 w-full grow overflow-hidden rounded-full bg-secondary transition-all">
      <SliderPrimitive.Range className="absolute h-full bg-primary transition-all" />
    </SliderPrimitive.Track>
    {/* Bigger thumb for mobile/touch (min 44px area per guidelines) */}
    <SliderPrimitive.Thumb className="
      block h-[38px] w-[38px] md:h-5 md:w-5 
      rounded-full border-2 border-primary bg-background ring-offset-background 
      transition-colors shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50
      " 
      // Optionally add role/aria if needed for a11y
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
