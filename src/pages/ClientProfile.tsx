import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, MapPin, FileText, Edit, Clock, Calendar } from 'lucide-react';

export default function ClientProfile() {
  const { id } = useParams();
  
  // Mock data for demonstration
  const client = {
    id: 1,
    name: 'Johnson LLC',
    type: 'Corporate',
    contact: 'Robert Johnson',
    email: 'rjohnson@johnsonllc.com',
    phone: '(555) 123-4567',
    address: '123 Business Ave, Suite 500, San Francisco, CA 94107',
    status: 'Active',
    matters: [
      { id: 1, title: 'Johnson v. Smith', status: 'Active', date: '2023-03-15' },
      { id: 2, title: 'Trademark Registration', status: 'Pending', date: '2023-02-10' }
    ],
    notes: [
      { id: 1, date: '2023-04-15', content: 'Discussed new matter regarding IP protection', author: 'Jane Doe' },
      { id: 2, date: '2023-03-20', content: 'Annual compliance review completed', author: 'John Smith' }
    ],
    billing: {
      outstanding: '$5,250',
      lastInvoice: '2023-04-01',
      paymentTerms: 'Net 30'
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">{client.name}</h1>
          <p className="text-muted-foreground">Client #{id} • {client.type}</p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" /> Edit Client
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Client Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.type}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                    client.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                  }`}>
                    {client.status}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{client.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>{client.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-sm">{client.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Billing Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Outstanding Balance</p>
                <p className="text-xl font-semibold">{client.billing.outstanding}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Last Invoice</p>
                <p>{client.billing.lastInvoice}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Payment Terms</p>
                <p>{client.billing.paymentTerms}</p>
              </div>
              <Button variant="outline" className="w-full mt-2">View Billing History</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="matters" className="w-full">
            <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:flex">
              <TabsTrigger value="matters">Matters</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="matters" className="mt-6 space-y-6">
              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Client Matters</CardTitle>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> New Matter
                  </Button>
                </CardHeader>
                <CardContent>
                  {client.matters.map((matter) => (
                    <div key={matter.id} className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <Link to={`/matters/${matter.id}`} className="font-medium hover:text-primary transition-colors">
                            {matter.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">Opened on {matter.date}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        matter.status === 'Active' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'
                      }`}>
                        {matter.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes" className="mt-6">
              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Client Notes</CardTitle>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Note
                  </Button>
                </CardHeader>
                <CardContent>
                  {client.notes.map((note) => (
                    <div key={note.id} className="mb-4 p-4 bg-muted/50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">{note.author}</p>
                        <p className="text-sm text-muted-foreground">{note.date}</p>
                      </div>
                      <p className="mt-2 text-sm">{note.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-10 w-10 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-medium">Client Documents</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Client-related documents would appear here
                    </p>
                    <Button className="mt-4">
                      <Plus className="mr-2 h-4 w-4" /> Upload Document
                    </Button>
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