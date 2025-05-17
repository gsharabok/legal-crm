import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText, Download, MessageSquare, DollarSign, Clock } from 'lucide-react';

export default function ClientPortal() {
  // Mock data for client portal
  const clientName = "Johnson LLC";
  const matters = [
    { id: 1, title: 'Johnson v. Smith', status: 'Active', lastUpdate: '2023-05-01' },
    { id: 2, title: 'Trademark Registration', status: 'Pending', lastUpdate: '2023-04-28' },
  ];
  const documents = [
    { id: 1, name: 'Complaint.pdf', date: '2023-03-15', size: '1.2 MB' },
    { id: 2, name: 'Response.pdf', date: '2023-04-01', size: '0.8 MB' },
    { id: 3, name: 'Evidence A.pdf', date: '2023-04-10', size: '2.5 MB' },
  ];
  const invoices = [
    { id: 101, number: 'INV-2023-101', date: '2023-04-30', amount: 1750, status: 'Paid' },
    { id: 102, number: 'INV-2023-102', date: '2023-03-31', amount: 2250, status: 'Paid' },
  ];
  const messages = [
    { id: 1, date: '2023-05-01', from: 'Jane Doe', content: 'Please review the attached documents for our upcoming meeting.' },
    { id: 2, date: '2023-04-25', from: 'John Smith', content: 'Your trademark application has been submitted. We will update you when we receive a response.' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-semibold">Client Portal</h1>
        <p className="text-muted-foreground">View-only portal for {clientName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Matters</p>
              <h3 className="text-2xl font-semibold">2</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Billable Hours</p>
              <h3 className="text-2xl font-semibold">24.5</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Billed</p>
              <h3 className="text-2xl font-semibold">$4,000</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Messages</p>
              <h3 className="text-2xl font-semibold">2</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="matters" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="matters" className="flex-1 sm:flex-none">Matters</TabsTrigger>
          <TabsTrigger value="documents" className="flex-1 sm:flex-none">Documents</TabsTrigger>
          <TabsTrigger value="billing" className="flex-1 sm:flex-none">Billing</TabsTrigger>
          <TabsTrigger value="messages" className="flex-1 sm:flex-none">Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="matters" className="mt-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Your Legal Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matters.map((matter) => (
                  <div key={matter.id} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{matter.title}</h3>
                        <p className="text-sm text-muted-foreground">Last updated: {matter.lastUpdate}</p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        matter.status === 'Active' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'
                      }`}>
                        {matter.status}
                      </span>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Shared Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                {documents.map((doc, index) => (
                  <div key={doc.id} className={`flex items-center justify-between p-4 ${
                    index < documents.length - 1 ? 'border-b' : ''
                  }`}>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">Added on {doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="mt-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-3">Invoice #</div>
                  <div className="col-span-3">Date</div>
                  <div className="col-span-3">Amount</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1"></div>
                </div>
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                    <div className="col-span-3 font-medium">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-primary mr-2" />
                        {invoice.number}
                      </div>
                    </div>
                    <div className="col-span-3">{invoice.date}</div>
                    <div className="col-span-3">${invoice.amount}</div>
                    <div className="col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
                        {invoice.status}
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages" className="mt-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-start">
                      <p className="font-medium">{message.from}</p>
                      <p className="text-sm text-muted-foreground">{message.date}</p>
                    </div>
                    <p className="mt-2 text-sm">{message.content}</p>
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