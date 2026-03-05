"use client"

interface TagChipProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'muted'
  size?: 'sm' | 'md'
  onClick?: () => void
  className?: string
}

export default function TagChip({ 
  children, 
  variant = 'default', 
  size = 'sm',
  onClick,
  className = '' 
}: TagChipProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-colors duration-200"
  
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  }
  
  const variantClasses = {
    default: "bg-muted text-fg/80 hover:bg-muted/80",
    accent: "bg-accent/10 text-accent hover:bg-accent/20",
    muted: "bg-muted/50 text-fg/70 hover:bg-muted/70"
  }
  
  const interactiveClasses = onClick ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50" : ""
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${interactiveClasses} ${className}`
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={classes}
        type="button"
      >
        {children}
      </button>
    )
  }
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}