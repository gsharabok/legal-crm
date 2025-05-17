import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Calendar, 
  Clock, 
  FileBox, 
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: FileText, label: 'Matters', href: '/matters' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: Clock, label: 'Time & Billing', href: '/billing' },
  { icon: FileBox, label: 'Documents', href: '/documents' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  return (
    <div className="h-full flex flex-col bg-white border-r border-border">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary">Legal CRM</h2>
      </div>
      
      <div className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) => cn(
              "flex items-center px-3 py-3 text-sm rounded-lg transition-all",
              "hover:bg-secondary hover:text-primary",
              isActive 
                ? "bg-primary/10 text-primary font-medium" 
                : "text-muted-foreground"
            )}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 mt-auto border-t border-border">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </Button>
      </div>
    </div>
  );
}