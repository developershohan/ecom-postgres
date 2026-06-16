import { getProductBySlug } from "@/lib/actions/product.action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus, ShoppingCart, ChevronRight } from "lucide-react";
import ProductImages from "@/components/ui/shared/product/product-images";

const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-muted-foreground text-lg">Product not found</p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const rating = Number(product.rating);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className=" wrapper px-4 py-8">
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="size-3.5" />
        <Link
          href={`/?category=${product.category.toLowerCase()}`}
          className="hover:text-foreground transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <ProductImages images={product.images} />

        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              {product.brand}
            </p>
            <h1 className="text-2xl font-bold tracking-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < fullStars ? "fill-amber-400 text-amber-400" : i === fullStars && hasHalfStar ? "fill-amber-400/50 text-amber-400" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {rating.toFixed(1)} ({product.numReviews} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.stock > 0 ? (
              <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-3 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                In Stock
              </span>
            ) : (
              <span className="rounded-full bg-destructive/10 px-3 py-0.5 text-xs font-semibold text-destructive">
                Out of Stock
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    disabled
                  >
                    <Minus className="size-3" />
                  </Button>
                  <span className="w-10 text-center text-sm font-medium tabular-nums">
                    1
                  </span>
                  <Button
                    variant="outline"
                    size="icon-sm"
                  >
                    <Plus className="size-3" />
                  </Button>
                </div>
                <span className="text-xs text-muted-foreground ml-auto">
                  {product.stock} available
                </span>
              </div>

              <Button size="lg" className="w-full gap-2" disabled={product.stock === 0}>
                <ShoppingCart className="size-4" />
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Category</p>
              <p className="font-medium">{product.category}</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Brand</p>
              <p className="font-medium">{product.brand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
