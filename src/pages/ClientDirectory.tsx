import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Search, Plus, Filter, MoreHorizontal } from 'lucide-react';

export default function ClientDirectory() {
  const mockClients = [
    { id: 1, name: 'Johnson LLC', type: 'Corporate', contact: 'Robert Johnson', email: 'rjohnson@johnsonllc.com', phone: '(555) 123-4567', status: 'Active' },
    { id: 2, name: 'TechCorp Inc.', type: 'Corporate', contact: 'Sarah Chen', email: 'schen@techcorp.com', phone: '(555) 234-5678', status: 'Active' },
    { id: 3, name: 'Maria Garcia', type: 'Individual', contact: 'Maria Garcia', email: 'mgarcia@email.com', phone: '(555) 345-6789', status: 'Active' },
    { id: 4, name: 'Acme Co.', type: 'Corporate', contact: 'James Wilson', email: 'jwilson@acmeco.com', phone: '(555) 456-7890', status: 'Inactive' },
    { id: 5, name: 'Global Industries', type: 'Corporate', contact: 'Patricia Lee', email: 'plee@globalind.com', phone: '(555) 567-8901', status: 'Active' },
    { id: 6, name: 'David Smith', type: 'Individual', contact: 'David Smith', email: 'dsmith@email.com', phone: '(555) 678-9012', status: 'Active' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" /> New Client
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search clients..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClients.map((client) => (
          <Card key={client.id} className="shadow-soft hover:shadow-hover transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Link to={`/clients/${client.id}`} className="font-medium hover:text-primary transition-colors">
                      {client.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{client.type}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-muted-foreground">Contact:</span>
                  <span className="col-span-2">{client.contact}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="col-span-2 truncate">{client.email}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="col-span-2">{client.phone}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  client.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                }`}>
                  {client.status}
                </span>
                <Link to={`/clients/${client.id}`}>
                  <Button variant="outline" size="sm">View Profile</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}