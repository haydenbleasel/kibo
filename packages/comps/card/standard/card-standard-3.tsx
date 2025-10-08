import { faker } from "@faker-js/faker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const title = "Meeting Notes Card";

const attendees = Array.from({ length: 3 }, () => ({
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
}));

const Example = () => (
  <Card className="w-[1050px]">
    <CardHeader>
      <CardTitle>Meeting Notes</CardTitle>
      <CardDescription>
        Transcript from the meeting with the client.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>
        Client requested dashboard redesign with focus on mobile responsiveness.
      </p>
      <ol className="list-inside list-decimal space-y-2">
        <li>New analytics widgets for daily/weekly metrics</li>
        <li>Simplified navigation menu</li>
        <li>Dark mode support</li>
        <li>Timeline: 6 weeks</li>
        <li>Follow-up meeting scheduled for next Tuesday</li>
      </ol>
    </CardContent>
    <CardFooter>
      <div className="-space-x-2 flex">
        {attendees.map((attendee, index) => (
          <Avatar className="border-2 border-background" key={index}>
            <AvatarImage alt={attendee.name} src={attendee.avatar} />
            <AvatarFallback>
              {attendee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default Example;
