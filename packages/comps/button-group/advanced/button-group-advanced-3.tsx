"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export const title = "Stepper Button Group";

const Example = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(100);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
          variant="outline"
        >
          <ChevronDownIcon />
        </Button>
        <Input
          className="w-20 bg-background text-center"
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
          value={quantity}
        />
        <Button onClick={() => setQuantity(quantity + 1)} variant="outline">
          <ChevronUpIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          onClick={() => setPrice(Math.max(0, price - 10))}
          variant="outline"
        >
          <ChevronDownIcon />
        </Button>
        <Input
          className="w-24 bg-background text-center"
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number"
          value={price}
        />
        <Button onClick={() => setPrice(price + 10)} variant="outline">
          <ChevronUpIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
