import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell, LineChart, Line, Legend, AreaChart, Area
} from 'recharts';
import { Clock, FileText, Users, DollarSign, TrendingUp } from 'lucide-react';
import {
  fetchCRMData, calculateTotalRevenue, calculateTotalBillableHours,
  groupByStatus, groupByCaseType, calculateMonthlyRevenue,
  calculatePaymentStatusDistribution, calculateAverageHourlyRate,
  calculateClientDistribution, calculateCaseTypeRevenue
} from '@/lib/utils';

// Color palette for charts
const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--muted))',
  'hsl(var(--accent))',
  'hsl(var(--secondary))',
  'hsl(var(--destructive))',
  'hsl(var(--success))'
];

export default function Dashboard() {
  const { data: crmData, isLoading, error } = useQuery({
    queryKey: ['crmData'],
    queryFn: fetchCRMData
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-lg font-medium">Loading dashboard data...</h2>
          <p className="text-muted-foreground">Please wait while we fetch your information.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-lg font-medium text-destructive">Error loading dashboard</h2>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }

  const totalRevenue = calculateTotalRevenue(crmData);
  const totalHours = calculateTotalBillableHours(crmData);
  const statusData = Object.entries(groupByStatus(crmData)).map(([name, value]) => ({ name, value }));
  const caseTypeData = Object.entries(groupByCaseType(crmData)).map(([name, value]) => ({ name, value }));
  const monthlyRevenue = calculateMonthlyRevenue(crmData);
  const paymentStatusData = calculatePaymentStatusDistribution(crmData);
  const averageHourlyRate = calculateAverageHourlyRate(crmData);
  const topClients = calculateClientDistribution(crmData);
  const caseTypeRevenue = calculateCaseTypeRevenue(crmData);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your legal practice overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-soft hover:shadow-hover transition-shadow">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Cases</p>
              <h3 className="text-2xl font-semibold">{crmData.filter(d => d.caseStatus === 'Open').length}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-hover transition-shadow">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
              <h3 className="text-2xl font-semibold">{new Set(crmData.map(d => d.clientId)).size}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-hover transition-shadow">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Billable Hours</p>
              <h3 className="text-2xl font-semibold">{totalHours}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-hover transition-shadow">
          <CardContent className="p-6 flex items-center">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-semibold">${totalRevenue.toLocaleString()}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-soft col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Revenue trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Case Status Distribution</CardTitle>
            <CardDescription>Current status of all cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex flex-col">
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [value, 'Cases']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {statusData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center justify-between px-2 py-1 rounded hover:bg-muted/50">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm truncate">{entry.name}</span>
                    </div>
                    <span className="text-sm font-medium">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Revenue by Case Type</CardTitle>
            <CardDescription>Total revenue for each practice area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={caseTypeRevenue}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Top Clients</CardTitle>
            <CardDescription>Clients with the most cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topClients}
                  margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) => [value, 'Cases']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
            <CardDescription>Distribution of payment statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {paymentStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [value, 'Cases']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Case Type Distribution</CardTitle>
            <CardDescription>Number of cases by practice area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={caseTypeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) => [value, 'Cases']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
            <CardDescription>Performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Hourly Rate</p>
                  <p className="text-2xl font-semibold">${averageHourlyRate}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue per Case</p>
                  <p className="text-2xl font-semibold">
                    ${Math.round(totalRevenue / crmData.length).toLocaleString()}
                  </p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours per Case</p>
                  <p className="text-2xl font-semibold">
                    {Math.round(totalHours / crmData.length)}
                  </p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest case updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crmData.slice(0, 5).map((item) => (
                <div key={item.caseId} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{item.caseType}</p>
                    <p className="text-sm text-muted-foreground">{item.companyName || `${item.firstName} ${item.lastName}`}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.totalBilled.toLocaleString()} • {item.billableHours} hours
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}