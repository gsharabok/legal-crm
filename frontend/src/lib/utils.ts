import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types for our CRM data
export interface CRMData {
  clientId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  caseId: string;
  caseType: string;
  caseStatus: string;
  startDate: string;
  billableHours: number;
  hourlyRate: number;
  totalBilled: number;
  paymentStatus: string;
}

// Mock CRM data for development
const mockCRMData: CRMData[] = [
  {
    clientId: "C001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "555-1234",
    companyName: "Acme Inc.",
    caseId: "CASE101",
    caseType: "Civil Litigation",
    caseStatus: "Open",
    startDate: "2024-01-15",
    billableHours: 32,
    hourlyRate: 250,
    totalBilled: 8000,
    paymentStatus: "Pending"
  },
  {
    clientId: "C002",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@email.com",
    phone: "555-5678",
    companyName: "Tech Solutions",
    caseId: "CASE102",
    caseType: "Corporate",
    caseStatus: "Open",
    startDate: "2024-02-01",
    billableHours: 45,
    hourlyRate: 300,
    totalBilled: 13500,
    paymentStatus: "Paid"
  },
  {
    clientId: "C003",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.j@email.com",
    phone: "555-9012",
    companyName: "Johnson Family",
    caseId: "CASE103",
    caseType: "Family Law",
    caseStatus: "Closed",
    startDate: "2023-11-10",
    billableHours: 28,
    hourlyRate: 275,
    totalBilled: 7700,
    paymentStatus: "Paid"
  },
  {
    clientId: "C004",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.w@email.com",
    phone: "555-3456",
    companyName: "Williams & Co",
    caseId: "CASE104",
    caseType: "Intellectual Property",
    caseStatus: "Open",
    startDate: "2024-03-05",
    billableHours: 18,
    hourlyRate: 350,
    totalBilled: 6300,
    paymentStatus: "Pending"
  },
  {
    clientId: "C005",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.b@email.com",
    phone: "555-7890",
    companyName: "Brown Enterprises",
    caseId: "CASE105",
    caseType: "Corporate",
    caseStatus: "Open",
    startDate: "2024-02-15",
    billableHours: 40,
    hourlyRate: 300,
    totalBilled: 12000,
    paymentStatus: "Pending"
  },
  {
    clientId: "C001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "555-1234",
    companyName: "Acme Inc.",
    caseId: "CASE106",
    caseType: "Employment",
    caseStatus: "Open",
    startDate: "2024-03-10",
    billableHours: 15,
    hourlyRate: 250,
    totalBilled: 3750,
    paymentStatus: "Pending"
  },
  {
    clientId: "C006",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.d@email.com",
    phone: "555-2345",
    companyName: "Davis LLC",
    caseId: "CASE107",
    caseType: "Real Estate",
    caseStatus: "Closed",
    startDate: "2023-12-05",
    billableHours: 22,
    hourlyRate: 275,
    totalBilled: 6050,
    paymentStatus: "Paid"
  },
  {
    clientId: "C007",
    firstName: "David",
    lastName: "Miller",
    email: "david.m@email.com",
    phone: "555-6789",
    companyName: "Miller Group",
    caseId: "CASE108",
    caseType: "Tax Law",
    caseStatus: "Open",
    startDate: "2024-01-20",
    billableHours: 30,
    hourlyRate: 325,
    totalBilled: 9750,
    paymentStatus: "Paid"
  }
];

// Function to fetch CRM data from Google Sheets
export async function fetchCRMData(): Promise<CRMData[]> {
  // For now, return mock data instead of trying to fetch from Google Sheets
  return Promise.resolve(mockCRMData);
  
  // The code below would be used if we had a valid Google Sheets ID
  /*
  try {
    const sheetId = import.meta.env.VITE_GOOGLE_SHEETS0674AB62_D88B_4662_8CDC_1B3BEDA0448E;
    if (!sheetId) {
      console.error('Google Sheets ID not found in environment variables');
      return mockCRMData;
    }
    
    // Extract the actual ID from the URL
    const matches = sheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const actualId = matches ? matches[1] : '';
    
    if (!actualId) {
      console.error('Could not parse Google Sheets ID from URL');
      return mockCRMData;
    }
    
    const parser = new PublicGoogleSheetsParser(actualId);
    const data = await parser.parse();
    return data.map((row: any) => ({
      clientId: row.ClientID,
      firstName: row.FirstName,
      lastName: row.LastName,
      email: row.Email,
      phone: row.Phone,
      companyName: row.CompanyName,
      caseId: row.CaseID,
      caseType: row.CaseType,
      caseStatus: row.CaseStatus,
      startDate: row.StartDate,
      billableHours: Number(row.BillableHours),
      hourlyRate: Number(row.HourlyRate),
      totalBilled: Number(row.TotalBilled),
      paymentStatus: row.PaymentStatus
    }));
  } catch (error) {
    console.error('Error fetching CRM data:', error);
    return mockCRMData;
  }
  */
}

// Helper functions for data analysis
export function calculateTotalRevenue(data: CRMData[]): number {
  return data.reduce((sum, item) => sum + item.totalBilled, 0);
}

export function calculateTotalBillableHours(data: CRMData[]): number {
  return data.reduce((sum, item) => sum + item.billableHours, 0);
}

export function groupByStatus(data: CRMData[]): { [key: string]: number } {
  return data.reduce((acc, item) => {
    acc[item.caseStatus] = (acc[item.caseStatus] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
}

export function groupByCaseType(data: CRMData[]): { [key: string]: number } {
  return data.reduce((acc, item) => {
    acc[item.caseType] = (acc[item.caseType] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
}

export function calculateMonthlyRevenue(data: CRMData[]): { name: string; revenue: number }[] {
  const monthlyData: { [key: string]: number } = {};
  
  data.forEach(item => {
    // Parse the date string
    let date;
    if (item.startDate.includes('Date(')) {
      // Handle Google Sheets date format: Date(2024,0,15)
      const dateParams = item.startDate.replace('Date(', '').replace(')', '').split(',');
      date = new Date(
        parseInt(dateParams[0]), // year
        parseInt(dateParams[1]), // month (0-indexed)
        parseInt(dateParams[2])  // day
      );
    } else {
      // Handle standard date format: 2024-01-15
      date = new Date(item.startDate);
    }
    
    const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    monthlyData[monthYear] = (monthlyData[monthYear] || 0) + item.totalBilled;
  });

  return Object.entries(monthlyData)
    .map(([name, revenue]) => ({ name, revenue }))
    .sort((a, b) => {
      const [monthA, yearA] = a.name.split(' ');
      const [monthB, yearB] = b.name.split(' ');
      return new Date(`${monthA} 1, ${yearA}`).getTime() - new Date(`${monthB} 1, ${yearB}`).getTime();
    });
}

// Additional helper functions for visualizations
export function calculatePaymentStatusDistribution(data: CRMData[]): { name: string; value: number }[] {
  const statusCounts = data.reduce((acc, item) => {
    acc[item.paymentStatus] = (acc[item.paymentStatus] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
  
  return Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
}

export function calculateAverageHourlyRate(data: CRMData[]): number {
  if (data.length === 0) return 0;
  const total = data.reduce((sum, item) => sum + item.hourlyRate, 0);
  return Math.round(total / data.length);
}

export function calculateClientDistribution(data: CRMData[]): { name: string; value: number }[] {
  // Count cases per client
  const clientCounts = data.reduce((acc, item) => {
    const clientName = item.companyName || `${item.firstName} ${item.lastName}`;
    acc[clientName] = (acc[clientName] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
  
  // Convert to array and sort by count (descending)
  return Object.entries(clientCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5); // Top 5 clients
}

export function calculateCaseTypeRevenue(data: CRMData[]): { name: string; value: number }[] {
  const typeRevenue = data.reduce((acc, item) => {
    acc[item.caseType] = (acc[item.caseType] || 0) + item.totalBilled;
    return acc;
  }, {} as { [key: string]: number });
  
  return Object.entries(typeRevenue)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}