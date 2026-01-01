
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PRODUCTS } from "@/lib/mockData";
import { Package, Users, BarChart3, Settings, Plus } from "lucide-react";

export default function Admin() {
  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Welcome, Admin</span>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center font-bold">A</div>
          </div>
        </div>

        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-4 md:w-[600px] mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-display">Product Management</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRODUCTS.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={product.image} alt="" className="h-10 w-10 rounded object-cover" />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-muted-foreground">SKU-{product.id}00</TableCell>
                      <TableCell>{product.inStock ? 'In Stock' : 'Out of Stock'}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
             <div className="grid gap-4 md:grid-cols-3 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardContent>
                </Card>
             </div>
             <Card>
               <CardHeader>
                 <CardTitle>Recent Orders</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground">Order history table placeholder...</p>
               </CardContent>
             </Card>
          </TabsContent>
          
          <TabsContent value="customers">
             <Card>
               <CardHeader>
                 <CardTitle>Customer Database</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-muted-foreground">Customer list placeholder...</p>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="settings">
             <Card>
               <CardHeader>
                 <CardTitle>Store Settings</CardTitle>
                 <CardDescription>Manage your store preferences</CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-muted-foreground">Settings form placeholder...</p>
               </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
