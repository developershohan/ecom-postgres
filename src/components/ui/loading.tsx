import Image from "next/image"
import loader from "@/assets/loader.gif"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-16 h-16">
        <Image
          src={loader}
          alt="Loading"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  )
}