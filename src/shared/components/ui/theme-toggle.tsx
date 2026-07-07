"use client"
import { Switch } from "@/shared/components/ui/switch"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-6 w-11" />
  }

  return (
    <div className="flex items-center gap-2 px-4">
      <Switch
        aria-label="Toggle theme"
        id="theme-toggle"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      {resolvedTheme === "dark" ? <Moon className="stroke-muted-foreground"/> : <Sun className="stroke-muted-foreground"/>}
    </div>
  )
}