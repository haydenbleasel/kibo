"use client";

import { useState } from "react";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Button Group with Select";

const Example = () => {
  const [country, setCountry] = useState("us");

  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Select onValueChange={setCountry} value={country}>
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">🇺🇸 US</SelectItem>
            <SelectItem value="uk">🇬🇧 UK</SelectItem>
            <SelectItem value="eu">🇪🇺 EU</SelectItem>
          </SelectContent>
        </Select>
        <ButtonGroupText>+1 (555) 123-4567</ButtonGroupText>
      </ButtonGroup>
      <ButtonGroup>
        <Select defaultValue="https">
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="https">https://</SelectItem>
            <SelectItem value="http">http://</SelectItem>
          </SelectContent>
        </Select>
        <ButtonGroupText>example.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  );
};

export default Example;
