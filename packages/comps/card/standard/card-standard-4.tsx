import { faker } from "@faker-js/faker";
import { Bath, Bed, Maximize } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const title = "Image Card";

const price = faker.commerce.price({ min: 100_000, max: 500_000, dec: 0 });
const beds = faker.number.int({ min: 2, max: 5 });
const baths = faker.number.int({ min: 1, max: 3 });
const area = faker.number.int({ min: 200, max: 500 });

const Example = () => (
  <Card className="w-full max-w-md overflow-hidden">
    <CardHeader>
      <CardTitle>3-Bedroom House</CardTitle>
      <CardDescription>
        A luxurious 3-bedroom house with a modern design.
      </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
      {/** biome-ignore lint/performance/noImgElement: "Kibo UI is framework agnostic" */}
      <img
        alt=""
        height={1380}
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={2070}
      />
    </CardContent>
    <CardFooter className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border px-4 py-2">
          <Bed className="h-4 w-4" />
          <span className="font-medium text-sm">{beds}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border px-4 py-2">
          <Bath className="h-4 w-4" />
          <span className="font-medium text-sm">{baths}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border px-4 py-2">
          <Maximize className="h-4 w-4" />
          <span className="font-medium text-sm">{area}m²</span>
        </div>
      </div>
      <p className="font-bold text-2xl">${Number(price).toLocaleString()}</p>
    </CardFooter>
  </Card>
);

export default Example;
