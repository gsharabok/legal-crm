import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Filter, MoreHorizontal } from 'lucide-react';

export default function MattersList() {
  const mockMatters = [
    { id: 1, title: 'Johnson v. Smith', client: 'Johnson LLC', status: 'Active', type: 'Litigation', date: '2023-05-01' },
    { id: 2, title: 'Trademark Registration', client: 'TechCorp Inc.', status: 'Pending', type: 'IP', date: '2023-04-28' },
    { id: 3, title: 'Estate Planning', client: 'Maria Garcia', status: 'Active', type: 'Estate', date: '2023-04-25' },
    { id: 4, title: 'Contract Review', client: 'Acme Co.', status: 'Completed', type: 'Contract', date: '2023-04-20' },
    { id: 5, title: 'Merger Documentation', client: 'Global Industries', status: 'Active', type: 'Corporate', date: '2023-04-15' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">Matters</h1>
          <p className="text-muted-foreground">Manage your legal matters and cases</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" /> New Matter
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search matters..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all" className="flex-1 sm:flex-none">All</TabsTrigger>
          <TabsTrigger value="active" className="flex-1 sm:flex-none">Active</TabsTrigger>
          <TabsTrigger value="pending" className="flex-1 sm:flex-none">Pending</TabsTrigger>
          <TabsTrigger value="completed" className="flex-1 sm:flex-none">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-5">Matter</div>
                  <div className="col-span-3">Client</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1"></div>
                </div>
                {mockMatters.map((matter) => (
                  <div key={matter.id} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                    <div className="col-span-5 font-medium">
                      <Link to={`/matters/${matter.id}`} className="hover:text-primary transition-colors">
                        {matter.title}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Updated {matter.date}</p>
                    </div>
                    <div className="col-span-3">{matter.client}</div>
                    <div className="col-span-2">{matter.type}</div>
                    <div className="col-span-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        matter.status === 'Active' ? 'bg-success/20 text-success' : 
                        matter.status === 'Pending' ? 'bg-primary/20 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {matter.status}
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Filtered view of active matters would appear here
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Filtered view of pending matters would appear here
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Filtered view of completed matters would appear here
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}