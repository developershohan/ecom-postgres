import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

// Optional: Define a TypeScript interface for type safety instead of 'any'
interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="group flex flex-col h-full"
      >
        <div className="relative w-full aspect-[3/4] bg-white overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
            priority={product.isFeatured}
          />
        </div>


        <CardHeader className="flex-grow p-4">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {product.brand} · {product.category}
          </div>
          <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2 mt-1">
            {product.description}
          </CardDescription>
        </CardHeader>


        <CardContent className="p-4 pt-0 flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <span
            className={`text-xs font-semibold ${product.stock > 0 ? "text-emerald-600" : "text-destructive"}`}
          >
            {product.stock > 0 ? `${product.stock} left` : "Out of Stock"}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
