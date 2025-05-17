import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function CalendarView() {
  // Mock data for calendar
  const currentMonth = "May 2023";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Generate calendar grid (simplified for demonstration)
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 1; // Offset to start with last day of previous month
    return {
      date: day,
      isCurrentMonth: day > 0 && day <= 31,
      events: day === 3 ? [
        { id: 1, title: "Client Meeting", client: "Johnson LLC", time: "10:00 AM" }
      ] : day === 5 ? [
        { id: 2, title: "Court Hearing", client: "TechCorp Inc.", time: "09:30 AM" }
      ] : day === 10 ? [
        { id: 3, title: "Document Review", client: "Maria Garcia", time: "02:00 PM" },
        { id: 4, title: "Team Meeting", client: "Internal", time: "04:00 PM" }
      ] : day === 15 ? [
        { id: 5, title: "Filing Deadline", client: "Acme Co.", time: "05:00 PM" }
      ] : []
    };
  });

  // Mock upcoming events
  const upcomingEvents = [
    { id: 1, title: "Client Meeting", client: "Johnson LLC", date: "May 3, 2023", time: "10:00 AM", location: "Office" },
    { id: 2, title: "Court Hearing", client: "TechCorp Inc.", date: "May 5, 2023", time: "09:30 AM", location: "County Courthouse" },
    { id: 3, title: "Document Review", client: "Maria Garcia", date: "May 10, 2023", time: "02:00 PM", location: "Virtual" },
    { id: 4, title: "Filing Deadline", client: "Acme Co.", date: "May 15, 2023", time: "05:00 PM", location: "N/A" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-semibold">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and appointments</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" /> New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">{currentMonth}</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-px bg-border">
                {/* Days of week header */}
                {daysOfWeek.map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium bg-white">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {calendarDays.map((day, i) => (
                  <div 
                    key={i} 
                    className={`min-h-[100px] p-2 bg-white border-t ${
                      !day.isCurrentMonth ? 'text-muted-foreground/50' : ''
                    } ${day.date === 3 ? 'ring-2 ring-primary ring-inset' : ''}`}
                  >
                    <div className="text-sm font-medium">{day.date > 0 ? day.date : ""}</div>
                    <div className="mt-1 space-y-1">
                      {day.events.map((event) => (
                        <div 
                          key={event.id} 
                          className="text-xs p-1 rounded bg-primary/10 text-primary truncate"
                          title={`${event.title} - ${event.client}`}
                        >
                          {event.time} {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 rounded-lg hover:bg-secondary transition-colors">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                  <p className="text-sm text-muted-foreground">{event.client}</p>
                  <p className="text-sm text-muted-foreground">Location: {event.location}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}