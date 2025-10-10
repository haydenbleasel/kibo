import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Vertical Tabs";

const Example = () => (
  <Tabs className="flex w-full max-w-2xl flex-row gap-6" defaultValue="profile">
    <TabsList className="flex h-auto flex-col">
      <TabsTrigger className="w-full justify-start" value="profile">
        Profile
      </TabsTrigger>
      <TabsTrigger className="w-full justify-start" value="security">
        Security
      </TabsTrigger>
      <TabsTrigger className="w-full justify-start" value="preferences">
        Preferences
      </TabsTrigger>
      <TabsTrigger className="w-full justify-start" value="team">
        Team
      </TabsTrigger>
    </TabsList>
    <div className="flex-1">
      <TabsContent value="profile">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 font-semibold text-lg">Profile Settings</h3>
          <p className="text-muted-foreground text-sm">
            Update your profile information including your name, email, and
            profile picture. These details will be visible to other users.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 font-semibold text-lg">Security Settings</h3>
          <p className="text-muted-foreground text-sm">
            Manage your password, two-factor authentication, and active sessions
            to keep your account secure.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="preferences">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 font-semibold text-lg">Preferences</h3>
          <p className="text-muted-foreground text-sm">
            Customize your experience with theme options, language settings, and
            notification preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h3 className="mb-2 font-semibold text-lg">Team Settings</h3>
          <p className="text-muted-foreground text-sm">
            Invite team members, manage permissions, and configure team-wide
            settings and integrations.
          </p>
        </div>
      </TabsContent>
    </div>
  </Tabs>
);

export default Example;
