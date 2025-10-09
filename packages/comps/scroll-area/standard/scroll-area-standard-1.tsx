import { ScrollArea } from "@/components/ui/scroll-area";

export const title = "Basic ScrollArea";

const Example = () => (
  <ScrollArea className="h-72 w-full max-w-md rounded-md border">
    <div className="p-4">
      <h4 className="mb-4 font-medium text-sm leading-none">
        Terms of Service
      </h4>
      <div className="space-y-4 text-muted-foreground text-sm">
        <p>
          Welcome to our service. By accessing or using our service, you agree
          to be bound by these Terms of Service and all applicable laws and
          regulations.
        </p>
        <p>
          You must be at least 18 years old to use this service. By using this
          service, you represent and warrant that you are at least 18 years of
          age.
        </p>
        <p>
          We reserve the right to modify or discontinue, temporarily or
          permanently, the service (or any part thereof) with or without notice.
        </p>
        <p>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the service without express written permission by us.
        </p>
        <p>
          We reserve the right to refuse service to anyone for any reason at any
          time. You understand that your content may be transferred unencrypted
          and involve transmissions over various networks.
        </p>
        <p>
          We do not warrant that the service will be uninterrupted, timely,
          secure, or error-free. You agree that from time to time we may remove
          the service for indefinite periods of time or cancel the service at
          any time.
        </p>
        <p>
          You agree to indemnify and hold us and our affiliates, officers,
          agents, and employees harmless from any claim or demand, including
          reasonable attorneys' fees, made by any third party due to or arising
          out of your breach of these Terms of Service.
        </p>
      </div>
    </div>
  </ScrollArea>
);

export default Example;
