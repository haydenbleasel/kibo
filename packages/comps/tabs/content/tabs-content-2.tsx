import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Tabs with Cards";

const Example = () => (
  <Tabs className="w-full max-w-2xl" defaultValue="featured">
    <TabsList>
      <TabsTrigger value="featured">Featured</TabsTrigger>
      <TabsTrigger value="popular">Popular</TabsTrigger>
      <TabsTrigger value="recent">Recent</TabsTrigger>
    </TabsList>
    <TabsContent value="featured">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3" variant="secondary">
            Featured
          </Badge>
          <h3 className="mb-2 font-semibold text-lg">
            Building Modern Web Apps
          </h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Learn how to build modern web applications with the latest
            technologies and best practices.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3" variant="secondary">
            Featured
          </Badge>
          <h3 className="mb-2 font-semibold text-lg">Advanced TypeScript</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Master advanced TypeScript concepts and patterns for building robust
            applications.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="popular">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3">Popular</Badge>
          <h3 className="mb-2 font-semibold text-lg">React Best Practices</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Discover the most popular patterns and practices used by React
            developers worldwide.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3">Popular</Badge>
          <h3 className="mb-2 font-semibold text-lg">API Design Principles</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Learn how to design clean, maintainable, and scalable APIs that
            developers love.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="recent">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3" variant="outline">
            New
          </Badge>
          <h3 className="mb-2 font-semibold text-lg">Next.js 15 Features</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Explore the latest features and improvements in Next.js 15 and how
            to use them.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <Badge className="mb-3" variant="outline">
            New
          </Badge>
          <h3 className="mb-2 font-semibold text-lg">Tailwind CSS Updates</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Learn about the newest additions to Tailwind CSS and how they can
            improve your workflow.
          </p>
          <Button size="sm" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
