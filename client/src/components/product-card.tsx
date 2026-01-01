
import { Product } from "@/lib/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] cursor-pointer h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="aspect-square relative overflow-hidden bg-secondary/20">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Badge variant="destructive" className="font-display">Out of Stock</Badge>
              </div>
            )}
            {product.inStock && (
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground font-display">New</Badge>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">{product.brand}</div>
          <h3 className="font-display font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted'}`} 
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-xl">${product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-secondary hover:bg-primary hover:text-white text-foreground transition-colors" onClick={(e) => {
            e.preventDefault();
            // Add to cart logic here
          }}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
