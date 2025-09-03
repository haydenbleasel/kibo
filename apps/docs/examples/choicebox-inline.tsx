import {
  Choicebox,
  ChoiceboxItem,
  ChoiceboxItemContent,
  ChoiceboxItemDescription,
  ChoiceboxItemHeader,
  ChoiceboxItemIndicator,
  ChoiceboxItemTitle,
} from "@repo/choicebox";

const options = [
  {
    id: "1",
    label: "Option 1",
    description: "This is the first option",
  },
  {
    id: "2",
    label: "Option 2",
    description: "This is the second option",
  },
];

const Example = () => (
  <Choicebox
    defaultValue="1"
    style={{
      gridTemplateColumns: `repeat(${options.length}, 1fr)`,
    }}
  >
    {options.map((option) => (
      <ChoiceboxItem key={option.id} value={option.id}>
        <ChoiceboxItemHeader>
          <ChoiceboxItemTitle>{option.label}</ChoiceboxItemTitle>
          <ChoiceboxItemDescription>
            {option.description}
          </ChoiceboxItemDescription>
        </ChoiceboxItemHeader>
        <ChoiceboxItemContent>
          <ChoiceboxItemIndicator />
        </ChoiceboxItemContent>
      </ChoiceboxItem>
    ))}
  </Choicebox>
);

export default Example;
