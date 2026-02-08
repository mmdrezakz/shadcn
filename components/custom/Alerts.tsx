"use client"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "../ui/button"

export default function Alerts({disable}:{disable:()=>void}) {
  return (
<div className="flex justify-center items-center w-full">

    <Alert className="top-0 absolute bg-card mt-4 px-20 w-fit text-text-custom">
  <AlertTitle>سلام!</AlertTitle>
  <AlertDescription className="text-text-custom">
    این یک پیغام تبلیغاتی می باشد.
  </AlertDescription>
  <div className="mx-auto mt-4">

    <Button onClick={disable} variant="outline" className="bg-button hover:bg-button-hover dark:bg-button dark:hover:bg-button-hover text-text-custom">باشه</Button>
  </div>
</Alert>
</div>

  )
}
