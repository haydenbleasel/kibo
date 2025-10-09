import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Chat Messages";

const messages = [
  {
    id: 1,
    user: "Hayden Bleasel",
    avatar: "https://github.com/haydenbleasel.png",
    initials: "HB",
    message: "Hey everyone! Just launched another AI Elements update!",
    time: "10:30 AM",
  },
  {
    id: 2,
    user: "shadcn",
    avatar: "https://github.com/shadcn.png",
    initials: "SC",
    message: "Nice one! Just pushed some updates to the UI components.",
    time: "10:32 AM",
  },
  {
    id: 3,
    user: "rauchg",
    avatar: "https://github.com/rauchg.png",
    initials: "RG",
    message: "Nice work @shadcn! The new design looks amazing.",
    time: "10:35 AM",
  },
  {
    id: 5,
    user: "shadcn",
    avatar: "https://github.com/shadcn.png",
    initials: "SC",
    message: "Thanks! Let me know if you have any feedback.",
    time: "10:40 AM",
  },
  {
    id: 4,
    user: "Hayden Bleasel",
    avatar: "https://github.com/haydenbleasel.png",
    initials: "HB",
    message: "What about me??",
    time: "10:37 AM",
  },
  {
    id: 6,
    user: "rauchg",
    avatar: "https://github.com/rauchg.png",
    initials: "RG",
    message: "What about you?",
    time: "10:45 AM",
  },
  {
    id: 7,
    user: "Hayden Bleasel",
    avatar: "https://github.com/haydenbleasel.png",
    initials: "HB",
    message: "A'ight chief 😭",
    time: "10:47 AM",
  },
  {
    id: 8,
    user: "shadcn",
    avatar: "https://github.com/shadcn.png",
    initials: "SC",
    message: "RIP lil bro 🫠",
    time: "10:40 AM",
  },
];

const Example = () => (
  <div className="w-full max-w-md">
    <ScrollArea className="h-[400px] rounded-md border bg-background">
      <div className="space-y-4 p-4">
        {messages.map((msg) => (
          <div className="flex gap-3" key={msg.id}>
            <Avatar className="size-8 shrink-0">
              <AvatarImage src={msg.avatar} />
              <AvatarFallback>{msg.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm">{msg.user}</span>
                <span className="text-muted-foreground text-xs">
                  {msg.time}
                </span>
              </div>
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export default Example;
