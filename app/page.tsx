"use client"
import Accordions from "@/components/custom/Accordions";
import Alerts from "@/components/custom/Alerts";
import ThemToggle from "@/components/custom/ThemToggle";
import { useState } from "react";


export default function Home() {
  const [bool,setBool] =  useState(false)
  function disableAlert():void{
     setBool(true)
  }
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      {bool ? null : <Alerts disable={disableAlert}/>}
      <ThemToggle/>
      <Accordions/>
    </div>
  );
}
