
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PRODUCTS } from "@/lib/mockData";
import { Trash2, Plus, Minus, CreditCard } from "lucide-react";

export default function Cart() {
  // Mock cart items
  const cartItems = PRODUCTS.slice(0, 2);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-10">
        <h1 className="text-3xl font-display font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-secondary/20">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold font-display">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                    </div>
                    <p className="font-bold font-display">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8"><Minus className="h-3 w-3" /></Button>
                      <span className="w-8 text-center text-sm font-medium">1</span>
                      <Button variant="outline" size="icon" className="h-8 w-8"><Plus className="h-3 w-3" /></Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-border/50 bg-card p-6 sticky top-24">
              <h2 className="font-display font-bold text-xl mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Input placeholder="Promo Code" />
                <Button className="w-full bg-primary hover:bg-primary/90 font-display h-12 text-lg">
                  Checkout <CreditCard className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex justify-center gap-2 pt-2">
                   {/* Payment icons placeholders */}
                   <div className="w-10 h-6 bg-white/10 rounded"></div>
                   <div className="w-10 h-6 bg-white/10 rounded"></div>
                   <div className="w-10 h-6 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
