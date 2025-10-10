"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export const title = "Search Filter Form";

const categories = [
  { id: "electronics", label: "Electronics" },
  { id: "clothing", label: "Clothing" },
  { id: "books", label: "Books" },
  { id: "home", label: "Home & Garden" },
] as const;

const formSchema = z.object({
  query: z.string(),
  sortBy: z.string(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().min(0).optional(),
  categories: z.array(z.string()).default([]),
  inStock: z.boolean().default(false),
});

const Example = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
      sortBy: "relevance",
      priceMin: undefined,
      priceMax: undefined,
      categories: [],
      inStock: false,
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
            <h2 className="font-bold text-2xl">Search Products</h2>
            <p className="text-muted-foreground text-sm">
              Filter and find what you're looking for
            </p>
          </div>
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Search products..."
                    type="search"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sortBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sort By</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Price Range</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="priceMin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="$0"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceMax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-background"
                        placeholder="$1000"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Categories</FormLabel>
                  <FormDescription>
                    Select the categories you want to search in.
                  </FormDescription>
                </div>
                {categories.map((category) => (
                  <FormField
                    control={form.control}
                    key={category.id}
                    name="categories"
                    render={({ field }) => {
                      return (
                        <FormItem
                          className="flex flex-row items-start space-x-3 space-y-0"
                          key={category.id}
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(category.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      category.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== category.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {category.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="inStock"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>In Stock Only</FormLabel>
                  <FormDescription>
                    Show only products that are currently available.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button className="flex-1" type="submit">
              Apply Filters
            </Button>
            <Button
              onClick={() => form.reset()}
              type="button"
              variant="outline"
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Example;
