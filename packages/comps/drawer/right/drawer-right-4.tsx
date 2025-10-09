"use client";

import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const title = "Right Drawer Shopping Cart";

const Example = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="outline">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Cart (3)
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Shopping Cart</DrawerTitle>
        <DrawerDescription>3 items in your cart</DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex gap-4 border-b pb-4">
            <div className="h-20 w-20 rounded-md bg-muted" />
            <div className="flex-1 space-y-1">
              <h4 className="font-medium text-sm">Wireless Headphones</h4>
              <p className="text-muted-foreground text-xs">Black, Standard</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">$99.00</span>
                <Button className="h-6 w-6" size="icon" variant="ghost">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-b pb-4">
            <div className="h-20 w-20 rounded-md bg-muted" />
            <div className="flex-1 space-y-1">
              <h4 className="font-medium text-sm">USB-C Cable</h4>
              <p className="text-muted-foreground text-xs">White, 2m</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">$19.00</span>
                <Button className="h-6 w-6" size="icon" variant="ghost">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-b pb-4">
            <div className="h-20 w-20 rounded-md bg-muted" />
            <div className="flex-1 space-y-1">
              <h4 className="font-medium text-sm">Phone Case</h4>
              <p className="text-muted-foreground text-xs">Clear, Slim</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">$29.00</span>
                <Button className="h-6 w-6" size="icon" variant="ghost">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$147.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-medium">
            <span>Total</span>
            <span>$157.00</span>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Checkout</Button>
        <DrawerClose asChild>
          <Button variant="outline">Continue Shopping</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
