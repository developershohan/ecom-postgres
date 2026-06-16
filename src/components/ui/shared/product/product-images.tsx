'use client'
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";


const ProductImages = ({ images }: { images: string[] }) => {
  console.log(images);
const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
        <Image 
        src={images[current]}
        width={1000}
        height={1000}
        alt="Product" className="w-full min-h-[300px] object-cover object-center rounded" />

      <div className="flex gap-2">
        {images.map((image, index) => (
          <div key={image} onClick={() => setCurrent(index)}>
            <Image src={image} alt={`Product `} width={100} height={100} className={cn("border rounded mr-2 hover:border-orange-600", current === index && "border-orange-500")} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductImages;