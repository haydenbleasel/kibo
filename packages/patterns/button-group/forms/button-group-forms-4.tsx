"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";

export const title = "Quantity Picker";

const Example = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(5);

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button
          disabled={quantity1 === 0}
          onClick={() => setQuantity1(Math.max(0, quantity1 - 1))}
          size="sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <ButtonGroupText className="min-w-12 justify-center">
          {quantity1}
        </ButtonGroupText>
        <Button
          onClick={() => setQuantity1(quantity1 + 1)}
          size="sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          disabled={quantity2 === 0}
          onClick={() => setQuantity2(Math.max(0, quantity2 - 1))}
          size="sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <ButtonGroupText className="min-w-16 justify-center">
          Qty: {quantity2}
        </ButtonGroupText>
        <Button
          onClick={() => setQuantity2(quantity2 + 1)}
          size="sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Example;
