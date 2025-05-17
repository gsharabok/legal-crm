import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileText, Clock, Calendar, DollarSign, Users, Paperclip, MessageSquare, Edit } from 'lucide-react';

export default function MatterDetail() {
  const { id } = useParams();
  
  // Mock data for demonstration
  const matter = {
    id: 1,
    title: 'Johnson v. Smith',
    client: 'Johnson LLC',
    status: 'Active',
    type: 'Litigation',
    description: 'Commercial dispute regarding breach of contract for software development services.',
    openDate: '2023-03-15',
    assignedTo: [
      { id: 1, name: 'Jane Doe', role: 'Lead Attorney' },
      { id: 2, name: 'John Smith', role: 'Associate' }
    ],
    documents: [
      { id: 1, name: 'Complaint.pdf', date: '2023-03-15', size: '1.2 MB' },
      { id: 2, name: 'Response.pdf', date: '2023-04-01', size: '0.8 MB' },
      { id: 3, name: 'Evidence A.pdf', date: '2023-04-10', size: '2.5 MB' }
    ],
    timeline: [
      { id: 1, date: '2023-03-15', event: 'Matter opened', user: 'Jane Doe' },
      { id: 2, date: '2023-03-20', event: 'Complaint filed', user: 'Jane Doe' },
      { id: 3, date: '2023-04-01', event: 'Response received', user: 'John Smith' },
      { id: 4, date: '2023-04-15', event: 'Discovery request sent', user: 'Jane Doe' }
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">{matter.title}</h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success">
              {matter.status}
            </span>
          </div>
          <p className="text-muted-foreground">Matter #{id} • {matter.client}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" /> Log Time
          </Button>
          <Button>
            <Edit className="mr-2 h-4 w-4" /> Edit Matter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Matter Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Client</p>
                <p>{matter.client}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Type</p>
                <p>{matter.type}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Date</p>
                <p>{matter.openDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Description</p>
                <p className="text-sm">{matter.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Assigned Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {matter.assignedTo.map((person) => (
                <div key={person.id} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:flex">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-6 border-l">
                    {matter.timeline.map((item, index) => (
                      <div key={item.id} className={`pb-6 ${index === matter.timeline.length - 1 ? '' : ''}`}>
                        <div className="absolute left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <p className="font-medium">{item.event}</p>
                        <p className="text-sm">by {item.user}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Documents</CardTitle>
                  <Button size="sm">
                    <Paperclip className="mr-2 h-4 w-4" /> Upload
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    {matter.documents.map((doc, index) => (
                      <React.Fragment key={doc.id}>
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-sm text-muted-foreground">Added on {doc.date} • {doc.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                        {index < matter.documents.length - 1 && <Separator />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="mt-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <DollarSign className="mx-auto h-10 w-10 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-medium">Billing Information</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Time entries and billing details would appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-medium">Matter Notes</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Notes and comments would appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}