
import { Layout } from "@/components/layout";
import { PRODUCTS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRoute } from "wouter";
import { Star, ShoppingCart, Truck, Shield, Share2 } from "lucide-react";
import NotFound from "./not-found";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const product = PRODUCTS.find(p => p.id === params?.id);

  if (!product) return <NotFound />;

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-card rounded-lg overflow-hidden border border-border/50">
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover"
             />
             <div className="absolute top-4 left-4">
               {product.inStock ? 
                 <Badge className="bg-primary text-primary-foreground">In Stock</Badge> : 
                 <Badge variant="destructive">Out of Stock</Badge>
               }
             </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{product.brand}</h2>
              <h1 className="text-4xl font-display font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                 <div className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-muted'}`} />
                    ))}
                 </div>
                 <span className="text-muted-foreground">{product.reviews} reviews</span>
              </div>
              <p className="text-2xl font-display font-bold">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-lg h-14 font-display">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-14 p-0">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">Free Shipping</h4>
                  <p className="text-xs text-muted-foreground">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold">2 Year Warranty</h4>
                  <p className="text-xs text-muted-foreground">Manufacturer guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
               <h3 className="font-display font-bold text-lg mb-4">Specifications</h3>
               <div className="grid grid-cols-1 gap-y-2 text-sm">
                 {Object.entries(product.specs).map(([key, value]) => (
                   <div key={key} className="flex justify-between border-b border-border/50 py-2">
                     <span className="text-muted-foreground">{key}</span>
                     <span className="font-medium">{value}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
        
        {/* Reviews & More */}
        <div className="mt-16">
          <Tabs defaultValue="reviews">
            <TabsList className="w-full justify-start border-b border-border/50 rounded-none bg-transparent p-0 h-auto">
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-3 text-lg font-display">Reviews</TabsTrigger>
              <TabsTrigger value="qa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-3 text-lg font-display">Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value="reviews" className="pt-8">
              <div className="space-y-6 max-w-3xl">
                {/* Mock Review */}
                <div className="border-b border-border/50 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">Excellent upgrade!</h4>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                  <div className="flex text-yellow-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-muted-foreground">Instantly noticed the difference. The quality is top notch and installation was straightforward.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
