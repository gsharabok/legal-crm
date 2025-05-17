import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Filter, FolderOpen, FileText, MoreHorizontal } from 'lucide-react';

export default function DocumentManagement() {
  const mockFolders = [
    { id: 1, name: 'Client Documents', count: 24 },
    { id: 2, name: 'Templates', count: 15 },
    { id: 3, name: 'Court Filings', count: 8 },
    { id: 4, name: 'Contracts', count: 32 },
  ];

  const mockDocuments = [
    { id: 1, name: 'Johnson - Complaint.pdf', type: 'PDF', size: '1.2 MB', modified: '2023-05-01', matter: 'Johnson v. Smith' },
    { id: 2, name: 'TechCorp - Trademark Application.docx', type: 'DOCX', size: '0.8 MB', modified: '2023-04-28', matter: 'Trademark Registration' },
    { id: 3, name: 'Garcia - Will.pdf', type: 'PDF', size: '2.5 MB', modified: '2023-04-25', matter: 'Estate Planning' },
    { id: 4, name: 'Acme - Service Agreement.docx', type: 'DOCX', size: '1.0 MB', modified: '2023-04-20', matter: 'Contract Review' },
    { id: 5, name: 'Global Industries - Merger Agreement.pdf', type: 'PDF', size: '3.2 MB', modified: '2023-04-15', matter: 'Merger Documentation' },
    { id: 6, name: 'NDA Template.docx', type: 'DOCX', size: '0.5 MB', modified: '2023-04-10', matter: 'Templates' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">Documents</h1>
          <p className="text-muted-foreground">Manage your legal documents and files</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" /> Upload Document
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mockFolders.map((folder) => (
          <Card key={folder.id} className="shadow-soft hover:shadow-hover transition-shadow cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FolderOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">{folder.name}</h3>
              <p className="text-sm text-muted-foreground">{folder.count} files</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all" className="flex-1 sm:flex-none">All Files</TabsTrigger>
          <TabsTrigger value="recent" className="flex-1 sm:flex-none">Recent</TabsTrigger>
          <TabsTrigger value="shared" className="flex-1 sm:flex-none">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div className="col-span-5">Name</div>
                  <div className="col-span-3">Matter</div>
                  <div className="col-span-2">Modified</div>
                  <div className="col-span-1">Size</div>
                  <div className="col-span-1"></div>
                </div>
                {mockDocuments.map((doc) => (
                  <div key={doc.id} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                    <div className="col-span-5 font-medium flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <p className="hover:text-primary transition-colors">{doc.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{doc.type}</p>
                      </div>
                    </div>
                    <div className="col-span-3 text-sm">{doc.matter}</div>
                    <div className="col-span-2 text-sm">{doc.modified}</div>
                    <div className="col-span-1 text-sm">{doc.size}</div>
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
        <TabsContent value="recent" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Recently accessed documents would appear here
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shared" className="mt-6">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Shared documents would appear here
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}