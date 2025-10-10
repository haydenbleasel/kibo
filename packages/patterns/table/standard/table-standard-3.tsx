import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const title = "Table Without Dividers";

const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: "$999.00",
    stock: 24,
  },
  {
    name: "Headphones",
    category: "Audio",
    price: "$199.00",
    stock: 156,
  },
  {
    name: "Keyboard",
    category: "Accessories",
    price: "$79.00",
    stock: 89,
  },
  {
    name: "Mouse",
    category: "Accessories",
    price: "$49.00",
    stock: 234,
  },
];

const Example = () => (
  <div className="w-full max-w-4xl rounded-md border bg-background">
    <Table>
      <TableHeader>
        <TableRow className="border-b-0 hover:bg-transparent">
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow className="border-b-0" key={product.name}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
            <TableCell className="text-right">{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Example;
