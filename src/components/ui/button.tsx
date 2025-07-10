import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-purple bg-transparent text-purple hover:bg-purple hover:text-white shadow-soft hover:shadow-glow",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Modern event-themed variants
        hero: "bg-gradient-button text-white font-bold shadow-luxury hover:shadow-glow hover:scale-105 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-accent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
        
        luxury: "bg-gradient-luxury text-white shadow-elegant hover:shadow-luxury transition-all duration-400 hover:scale-105 backdrop-blur-sm",
        
        elegant: "glass border-2 border-purple/30 text-purple hover:bg-purple hover:text-white shadow-soft transition-all duration-300 hover:border-purple",
        
        modern: "bg-gradient-to-r from-blue to-teal text-white font-semibold shadow-soft hover:shadow-elegant hover:scale-105 transition-all duration-300",
        
        vibrant: "bg-gradient-to-r from-rose to-coral text-white font-semibold shadow-soft hover:shadow-elegant hover:scale-105 transition-all duration-300",
        
        glass: "glass text-foreground border border-white/20 shadow-card hover:shadow-glow transition-all duration-300 hover:bg-white/10",
        
        glow: "bg-purple text-white shadow-glow hover:shadow-luxury transition-all duration-300 hover:scale-105 animate-glow",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 py-4 text-base font-bold",
        xl: "h-16 rounded-2xl px-10 py-5 text-lg font-bold",
        icon: "h-11 w-11 rounded-xl",
        "icon-sm": "h-9 w-9 rounded-lg",
        "icon-lg": "h-14 w-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
