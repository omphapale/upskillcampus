
import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

export default function Catalog() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
            <div className="flex items-center gap-2 md:hidden mb-4">
              <Button variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </Button>
            </div>
            
            <div className="hidden md:block space-y-6">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="flex items-center space-x-2">
                      <Checkbox id={`cat-${cat.id}`} />
                      <Label htmlFor={`cat-${cat.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                        {cat.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion type="single" collapsible defaultValue="price">
                <AccordionItem value="price" className="border-border/50">
                  <AccordionTrigger className="font-display font-bold">Price Range</AccordionTrigger>
                  <AccordionContent className="pt-4 px-1">
                    <Slider
                      defaultValue={[0, 2000]}
                      max={2000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="brand" className="border-border/50">
                   <AccordionTrigger className="font-display font-bold">Brand</AccordionTrigger>
                   <AccordionContent className="space-y-2">
                     {['Brembo', 'Bosch', 'Pirelli', 'Holley', 'Philips'].map((brand) => (
                       <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                       </div>
                     ))}
                   </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-display font-bold">Performance Parts Catalog</h1>
              <div className="flex items-center gap-4">
                 <span className="text-sm text-muted-foreground hidden sm:inline-block">Showing {PRODUCTS.length} results</span>
                 <div className="relative w-40 sm:w-64">
                   <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                   <Input placeholder="Search within results..." className="pl-8 h-9" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
