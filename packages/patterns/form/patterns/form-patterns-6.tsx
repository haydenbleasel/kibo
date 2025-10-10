"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Checkout Form";

const formSchema = z.object({
  email: z.string().email(),
  cardName: z.string().min(2),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
  billingAddress: z.string().min(5),
  city: z.string().min(2),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/),
  country: z.string(),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: "",
      city: "",
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <h2 className="font-bold text-2xl">Payment Details</h2>
            <p className="text-muted-foreground text-sm">
              Complete your purchase
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contact</h3>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="you@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We'll send your receipt here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Payment Method</h3>
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name on Card</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      maxLength={16}
                      placeholder="1234567890123456"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="MM/YY"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        maxLength={4}
                        placeholder="123"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Billing Address</h3>
            <FormField
              control={form.control}
              name="billingAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-background"
                      placeholder="123 Main St"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="New York"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="10001"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Complete Purchase
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Example;
