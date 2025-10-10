import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const title = "Nested Tabs";

const Example = () => (
  <Tabs className="w-full max-w-2xl" defaultValue="profile">
    <TabsList>
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Profile</h3>
        <Tabs defaultValue="personal">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Full Name</p>
                <p className="text-muted-foreground text-sm">John Doe</p>
              </div>
              <div>
                <p className="font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-sm">
                  john.doe@example.com
                </p>
              </div>
              <div>
                <p className="font-medium text-sm">Location</p>
                <p className="text-muted-foreground text-sm">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="social">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Twitter</p>
                <p className="text-muted-foreground text-sm">@johndoe</p>
              </div>
              <div>
                <p className="font-medium text-sm">GitHub</p>
                <p className="text-muted-foreground text-sm">
                  github.com/johndoe
                </p>
              </div>
              <div>
                <p className="font-medium text-sm">Website</p>
                <p className="text-muted-foreground text-sm">johndoe.com</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="preferences">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Language</p>
                <p className="text-muted-foreground text-sm">English</p>
              </div>
              <div>
                <p className="font-medium text-sm">Timezone</p>
                <p className="text-muted-foreground text-sm">
                  Pacific Time (PT)
                </p>
              </div>
              <div>
                <p className="font-medium text-sm">Theme</p>
                <p className="text-muted-foreground text-sm">System Default</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
    <TabsContent value="settings">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Settings</h3>
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Account Status</p>
                <p className="text-muted-foreground text-sm">Active</p>
              </div>
              <div>
                <p className="font-medium text-sm">Member Since</p>
                <p className="text-muted-foreground text-sm">January 2024</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="security">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Two-Factor Authentication</p>
                <p className="text-muted-foreground text-sm">Enabled</p>
              </div>
              <div>
                <p className="font-medium text-sm">Last Password Change</p>
                <p className="text-muted-foreground text-sm">30 days ago</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="privacy">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Profile Visibility</p>
                <p className="text-muted-foreground text-sm">Public</p>
              </div>
              <div>
                <p className="font-medium text-sm">Data Sharing</p>
                <p className="text-muted-foreground text-sm">Disabled</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Billing</h3>
        <Tabs defaultValue="plan">
          <TabsList>
            <TabsTrigger value="plan">Current Plan</TabsTrigger>
            <TabsTrigger value="payment">Payment Method</TabsTrigger>
            <TabsTrigger value="history">Billing History</TabsTrigger>
          </TabsList>
          <TabsContent value="plan">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Plan</p>
                <p className="text-muted-foreground text-sm">Professional</p>
              </div>
              <div>
                <p className="font-medium text-sm">Price</p>
                <p className="text-muted-foreground text-sm">$29/month</p>
              </div>
              <div>
                <p className="font-medium text-sm">Next Billing Date</p>
                <p className="text-muted-foreground text-sm">
                  February 1, 2024
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">Payment Method</p>
                <p className="text-muted-foreground text-sm">
                  •••• •••• •••• 4242
                </p>
              </div>
              <div>
                <p className="font-medium text-sm">Expires</p>
                <p className="text-muted-foreground text-sm">12/2025</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div className="mt-4 space-y-3 rounded-md border p-4">
              <div>
                <p className="font-medium text-sm">January 2024</p>
                <p className="text-muted-foreground text-sm">$29.00 - Paid</p>
              </div>
              <div>
                <p className="font-medium text-sm">December 2023</p>
                <p className="text-muted-foreground text-sm">$29.00 - Paid</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
  </Tabs>
);

export default Example;
