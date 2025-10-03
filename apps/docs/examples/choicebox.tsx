import {
  Choicebox,
  ChoiceboxIndicator,
  ChoiceboxItem,
  ChoiceboxItemDescription,
  ChoiceboxItemHeader,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "@repo/choicebox";

const options = [
  {
    id: "1",
    label: "Option 1",
    subtitle: "(the first option)",
    description: "This is the first option",
  },
  {
    id: "2",
    label: "Option 2",
    subtitle: "(the second option)",
    description: "This is the second option",
  },
];

const Example = () => (
  <Choicebox defaultValue="1">
    {options.map((option) => (
      <ChoiceboxItem key={option.id} value={option.id}>
        <ChoiceboxItemHeader>
          <ChoiceboxItemTitle>
            {option.label}
            <ChoiceboxItemSubtitle>{option.subtitle}</ChoiceboxItemSubtitle>
          </ChoiceboxItemTitle>
          <ChoiceboxItemDescription>
            {option.description}
          </ChoiceboxItemDescription>
        </ChoiceboxItemHeader>
        <ChoiceboxIndicator />
      </ChoiceboxItem>
    ))}
  </Choicebox>
);

export default Example;
