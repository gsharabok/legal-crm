import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Play, Pause, Plus, FileText, DollarSign, Search, Filter } from 'lucide-react';

export default function TimeBilling() {
  // Mock data for time entries
  const timeEntries = [
    { id: 1, date: '2023-05-01', matter: 'Johnson v. Smith', description: 'Document review', hours: 2.5, rate: 250, amount: 625, status: 'Unbilled' },
    { id: 2, date: '2023-05-01', matter: 'TechCorp Inc.', description: 'Client meeting', hours: 1.0, rate: 250, amount: 250, status: 'Unbilled' },
    { id: 3, date: '2023-04-30', matter: 'Estate Planning', description: 'Draft will', hours: 3.0, rate: 250, amount: 750, status: 'Billed' },
    { id: 4, date: '2023-04-29', matter: 'Johnson v. Smith', description: 'Research case law', hours: 4.5, rate: 250, amount: 1125, status: 'Billed' },
    { id: 5, date: '2023-04-28', matter: 'TechCorp Inc.', description: 'Prepare trademark application', hours: 2.0, rate: 250, amount: 500, status: 'Billed' },
  ];

  // Mock data for invoices
  const invoices = [
    { id: 101, number: 'INV-2023-101', client: 'Johnson LLC', date: '2023-04-30', amount: 1750, status: 'Paid' },
    { id: 102, number: 'INV-2023-102', client: 'TechCorp Inc.', date: '2023-04-30', amount: 500, status: 'Pending' },
    { id: 103, number: 'INV-2023-103', client: 'Maria Garcia', date: '2023-03-31', amount: 750, status: 'Paid' },
    { id: 104, number: 'INV-2023-104', client: 'Acme Co.', date: '2023-03-31', amount: 1200, status: 'Overdue' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">Time & Billing</h1>
          <p className="text-muted-foreground">Track your time and manage invoices</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" /> Log Time
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Invoice
          </Button>
        </div>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Time Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Matter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="johnson">Johnson v. Smith</SelectItem>
                  <SelectItem value="techcorp">TechCorp Inc.</SelectItem>
                  <SelectItem value="garcia">Estate Planning</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Description" />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-mono font-medium flex-1 text-center">00:00:00</div>
              <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="time" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="time" className="flex-1 sm:flex-none">Time Entries</TabsTrigger>
          <TabsTrigger value="invoices" className="flex-1 sm:flex-none">Invoices</TabsTrigger>
        </TabsList>
        
        <TabsContent value="time" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search time entries..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-2">Date</div>
                  <div className="col-span-3">Matter</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Hours</div>
                  <div className="col-span-1">Rate</div>
                  <div className="col-span-1">Amount</div>
                  <div className="col-span-1">Status</div>
                </div>
                {timeEntries.map((entry) => (
                  <div key={entry.id} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                    <div className="col-span-2">{entry.date}</div>
                    <div className="col-span-3">{entry.matter}</div>
                    <div className="col-span-3">{entry.description}</div>
                    <div className="col-span-1">{entry.hours}</div>
                    <div className="col-span-1">${entry.rate}</div>
                    <div className="col-span-1">${entry.amount}</div>
                    <div className="col-span-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        entry.status === 'Unbilled' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="invoices" className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-2">Invoice #</div>
                  <div className="col-span-4">Client</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Status</div>
                </div>
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                    <div className="col-span-2 font-medium">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-primary mr-2" />
                        {invoice.number}
                      </div>
                    </div>
                    <div className="col-span-4">{invoice.client}</div>
                    <div className="col-span-2">{invoice.date}</div>
                    <div className="col-span-2">${invoice.amount}</div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        invoice.status === 'Paid' ? 'bg-success/20 text-success' : 
                        invoice.status === 'Pending' ? 'bg-primary/20 text-primary' :
                        'bg-destructive/20 text-destructive'
                      }`}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}