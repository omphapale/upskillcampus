
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Truck, ShieldCheck, Wrench } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/mockData";
import { ProductCard } from "@/components/product-card";
import workshopBg from "@assets/generated_images/dark_cinematic_automotive_workshop_background.png";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={workshopBg} 
            alt="Workshop Background" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-medium backdrop-blur-sm border border-primary/20">
              Premium Automotive Parts
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white text-glow">
              UPGRADE <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">YOUR RIDE</span>
            </h1>
            <p className="text-lg text-gray-300 md:text-xl max-w-[600px]">
              The world's largest selection of high-performance aftermarket parts and accessories for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/catalog">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 h-14 font-display skew-x-[-10deg]">
                  <span className="skew-x-[10deg]">Shop Now</span>
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14 font-display skew-x-[-10deg] backdrop-blur-sm">
                <span className="skew-x-[10deg]">Find My Vehicle</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="border-b border-border/40 bg-card/50 backdrop-blur-sm py-8">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold font-display">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Free delivery on orders over $99</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold font-display">Warranty Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Manufacturer warranty on all parts</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold font-display">Expert Support</h3>
              <p className="text-sm text-muted-foreground">24/7 technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-display font-bold tracking-tight">Shop by Category</h2>
            <Link href="/catalog">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} href={`/catalog?category=${cat.id}`}>
                <div className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">{cat.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card/30 border-y border-border/40">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold tracking-tight mb-10 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 skew-y-3 scale-110" />
        <div className="container relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tighter">
            Build Your Dream Machine
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of enthusiasts who trust AutoParts Pro for their performance upgrades.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 h-12 font-bold font-display">
            Start Your Build
          </Button>
        </div>
      </section>
    </Layout>
  );
}
