"use client"
import Accordions from "@/components/custom/Accordions";
import Alerts from "@/components/custom/Alerts";
import ThemToggle from "@/components/custom/ThemToggle";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollAreaRtl } from "@/components/custom/Scroll-Areas";


export default function Home() {
  const [bool, setBool] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // حالت لودینگ

  function disableAlert(): void {
    setBool(true)
  }

  // شبیه‌سازی لودینگ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 min-h-screen">

        
        {/* اسکلت برای آکاردئون */}
        <div className="space-y-4 w-80">
          <Skeleton className="bg-primary w-full h-12" />
          <Skeleton className="bg-primary w-full h-12" />
          <Skeleton className="bg-primary w-full h-12" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      {/* محتوای اصلی بعد از لودینگ */}
      {bool ? null : <Alerts disable={disableAlert} />}
      <ThemToggle />
      <main className="space-y-8 mt-32 pt-4">

      <Accordions />
      <ScrollAreaRtl />
      </main>
    </div>
  )
}