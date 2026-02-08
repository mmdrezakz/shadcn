"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SunIcon } from "../icons/tabler-sun";
import { MoonIcon } from "../icons/tabler-moon";



export default function ThemToggle() {
    const [mode,setMode] = useState("روشن")


    function themeHandler() {
     let Theme = document.documentElement.classList.toggle("dark")
     setMode(Theme ? "تاریک" : "روشن")
      localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    
    
}
  return (
          <Button onClick={themeHandler} variant="outline" className="top-5 right-5 absolute bg-button hover:bg-button-hover dark:bg-button dark:hover:bg-button-hover text-text-custom" >
            {mode ==="تاریک" && <SunIcon />}
            {mode ==="روشن" && <MoonIcon/> }
            </Button>
  )
}
