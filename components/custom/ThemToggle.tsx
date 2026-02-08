"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";



export default function ThemToggle() {
    const [mode,setMode] = useState("روشن")


    function themeHandler() {
     let Theme = document.documentElement.classList.toggle("dark")
     setMode(Theme ? "تاریک" : "روشن")
      localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    
    
}
  return (
          <Button onClick={themeHandler} variant="outline" className="bg-button hover:bg-button-hover dark:bg-button dark:hover:bg-button-hover text-text-custom" >
            {mode ==="تاریک" && "روشن" }
            {mode ==="روشن" && "تاریک" }
            </Button>
  )
}
