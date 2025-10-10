import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "RadioGroup with Custom Content";

const Example = () => (
  <RadioGroup className="gap-3" defaultValue="pro">
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem className="mt-1" id="free" value="free" />
      <div className="grid flex-1 gap-2 leading-none">
        <div className="flex items-center justify-between">
          <Label className="cursor-pointer font-medium" htmlFor="free">
            Free
          </Label>
          <Badge variant="secondary">$0/mo</Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          Basic features for individuals starting out.
        </p>
        <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
          <li>• Up to 3 projects</li>
          <li>• 1GB storage</li>
          <li>• Community support</li>
        </ul>
      </div>
    </div>
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem className="mt-1" id="pro" value="pro" />
      <div className="grid flex-1 gap-2 leading-none">
        <div className="flex items-center justify-between">
          <Label className="cursor-pointer font-medium" htmlFor="pro">
            Pro
          </Label>
          <Badge>$12/mo</Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          Advanced features for professionals.
        </p>
        <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
          <li>• Unlimited projects</li>
          <li>• 100GB storage</li>
          <li>• Priority support</li>
          <li>• Advanced analytics</li>
        </ul>
      </div>
    </div>
    <div className="relative flex cursor-pointer items-start space-x-3 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent">
      <RadioGroupItem className="mt-1" id="enterprise" value="enterprise" />
      <div className="grid flex-1 gap-2 leading-none">
        <div className="flex items-center justify-between">
          <Label className="cursor-pointer font-medium" htmlFor="enterprise">
            Enterprise
          </Label>
          <Badge variant="secondary">Custom</Badge>
        </div>
        <p className="text-muted-foreground text-sm">
          Custom solutions for organizations.
        </p>
        <ul className="mt-2 space-y-1 text-muted-foreground text-xs">
          <li>• Everything in Pro</li>
          <li>• Unlimited storage</li>
          <li>• Dedicated support</li>
          <li>• Custom integrations</li>
        </ul>
      </div>
    </div>
  </RadioGroup>
);

export default Example;
