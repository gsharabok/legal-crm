import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Mail, 
  Lock, 
  CreditCard, 
  Bell, 
  Users, 
  Shield, 
  Settings as SettingsIcon,
  Upload,
  Trash,
  Save,
  Moon,
  Sun,
  Eye,
  EyeOff,
  Check,
  X
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-semibold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full sm:w-auto grid grid-cols-2 md:grid-cols-4 lg:flex">
          <TabsTrigger value="profile" className="flex-1 sm:flex-none">
            <User className="w-4 h-4 mr-2" /> Profile
          </TabsTrigger>
          <TabsTrigger value="account" className="flex-1 sm:flex-none">
            <Lock className="w-4 h-4 mr-2" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex-1 sm:flex-none">
            <CreditCard className="w-4 h-4 mr-2" /> Billing
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1 sm:flex-none">
            <Bell className="w-4 h-4 mr-2" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="team" className="flex-1 sm:flex-none">
            <Users className="w-4 h-4 mr-2" /> Team
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex-1 sm:flex-none">
            <SettingsIcon className="w-4 h-4 mr-2" /> Appearance
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="font-medium">Profile Picture</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" /> Upload New
                    </Button>
                    <Button variant="outline" size="sm" className="text-muted-foreground">
                      <Trash className="w-4 h-4 mr-2" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="jane.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Input id="bio" defaultValue="Attorney specializing in corporate law with 10+ years of experience." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="barNumber">Bar Number</Label>
                  <Input id="barNumber" defaultValue="123456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jurisdiction">Primary Jurisdiction</Label>
                  <Select defaultValue="ca">
                    <SelectTrigger>
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Password & Security</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input id="currentPassword" type="password" />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Input id="newPassword" type="password" />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input id="confirmPassword" type="password" />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline">Update Password</Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Sessions</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">MacBook Pro • San Francisco, CA</p>
                        <p className="text-sm text-muted-foreground">Started 2 hours ago</p>
                      </div>
                      <div className="px-2 py-1 bg-success/20 text-success text-xs rounded-full">Active</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Logout of All Other Devices</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">Professional Plan</p>
                    <p className="text-muted-foreground">$49/month, billed annually</p>
                    <div className="flex items-center mt-1 text-sm text-primary">
                      <Check className="h-4 w-4 mr-1" /> Active until May 1, 2024
                    </div>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-3 bg-background rounded-lg">
                    <p className="font-medium">Unlimited Cases</p>
                    <p className="text-sm text-muted-foreground">No restrictions on case volume</p>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <p className="font-medium">10 Team Members</p>
                    <p className="text-sm text-muted-foreground">Collaborate with your team</p>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <p className="font-medium">25GB Storage</p>
                    <p className="text-sm text-muted-foreground">For documents and files</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Payment Method</h3>
                <div className="p-4 border rounded-lg flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-16 bg-muted rounded flex items-center justify-center">
                      <span className="font-medium">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Billing History</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                    <div className="col-span-4">Date</div>
                    <div className="col-span-4">Amount</div>
                    <div className="col-span-3">Status</div>
                    <div className="col-span-1"></div>
                  </div>
                  <div className="grid grid-cols-12 p-4 items-center">
                    <div className="col-span-4">May 1, 2023</div>
                    <div className="col-span-4">$49.00</div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                        Paid
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-4 items-center border-t">
                    <div className="col-span-4">April 1, 2023</div>
                    <div className="col-span-4">$49.00</div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                        Paid
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Case Updates</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your cases</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Deadline Reminders</p>
                      <p className="text-sm text-muted-foreground">Receive reminders about upcoming deadlines</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Billing Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive notifications about invoices and payments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Client Messages</p>
                      <p className="text-sm text-muted-foreground">Receive notifications when clients send messages</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-muted-foreground">Receive news and promotional content</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">In-App Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Case Activity</p>
                      <p className="text-sm text-muted-foreground">Show notifications for case updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Team Messages</p>
                      <p className="text-sm text-muted-foreground">Show notifications for team messages</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">System Alerts</p>
                      <p className="text-sm text-muted-foreground">Show notifications for system updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Notification Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Do Not Disturb</p>
                      <p className="text-sm text-muted-foreground">Pause all notifications during specified hours</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">Team Members</CardTitle>
                <CardDescription>Manage your team and permissions</CardDescription>
              </div>
              <Button>
                <Users className="mr-2 h-4 w-4" /> Invite Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-4">Name</div>
                  <div className="col-span-3">Role</div>
                  <div className="col-span-3">Status</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>
                <div className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-4 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">jane.doe@example.com</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <Select defaultValue="admin">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="attorney">Attorney</SelectItem>
                        <SelectItem value="paralegal">Paralegal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                      Active
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                <div className="grid grid-cols-12 p-4 items-center border-t">
                  <div className="col-span-4 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-muted-foreground">john.smith@example.com</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <Select defaultValue="attorney">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="attorney">Attorney</SelectItem>
                        <SelectItem value="paralegal">Paralegal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                      Active
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                <div className="grid grid-cols-12 p-4 items-center border-t">
                  <div className="col-span-4 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-sm text-muted-foreground">robert.j@example.com</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <Select defaultValue="paralegal">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="attorney">Attorney</SelectItem>
                        <SelectItem value="paralegal">Paralegal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      Invited
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button variant="ghost" size="sm">Resend</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Permission Groups</CardTitle>
              <CardDescription>Configure access levels for team roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Admin</h3>
                      <p className="text-sm text-muted-foreground">Full system access and control</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Manage Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Billing Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">System Settings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">All Cases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">All Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Reports</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Attorney</h3>
                      <p className="text-sm text-muted-foreground">Case management and client access</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Manage Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Billing Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">System Settings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Assigned Cases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Assigned Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Reports</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Paralegal</h3>
                      <p className="text-sm text-muted-foreground">Limited case and document access</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Manage Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Billing Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">System Settings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">Assigned Cases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span className="text-sm">View Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Theme</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="h-20 w-full bg-background border rounded-md flex items-center justify-center">
                      <Sun className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-medium">Light</p>
                    <div className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Active</div>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="h-20 w-full bg-zinc-900 border rounded-md flex items-center justify-center">
                      <Moon className="h-8 w-8 text-zinc-400" />
                    </div>
                    <p className="font-medium">Dark</p>
                  </div>
                  <div className="border rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="h-20 w-full bg-gradient-to-r from-background to-zinc-900 border rounded-md flex items-center justify-center">
                      <div className="flex">
                        <Sun className="h-8 w-8 text-primary" />
                        <Moon className="h-8 w-8 text-zinc-400" />
                      </div>
                    </div>
                    <p className="font-medium">System</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Layout Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Compact Mode</p>
                      <p className="text-sm text-muted-foreground">Use compact layout for tables and lists</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Large Text</p>
                      <p className="text-sm text-muted-foreground">Increase text size throughout the application</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Reduced Motion</p>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Dashboard Customization</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Revenue Charts</p>
                      <p className="text-sm text-muted-foreground">Display financial data on dashboard</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Case Status</p>
                      <p className="text-sm text-muted-foreground">Display case status distribution</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Recent Activity</p>
                      <p className="text-sm text-muted-foreground">Display recent case updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}