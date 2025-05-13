import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Toaster } from '@/components/ui/toaster';

// Pages
import Dashboard from './pages/Dashboard';
import MattersList from './pages/MattersList';
import MatterDetail from './pages/MatterDetail';
import ClientDirectory from './pages/ClientDirectory';
import ClientProfile from './pages/ClientProfile';
import DocumentManagement from './pages/DocumentManagement';
import CalendarView from './pages/CalendarView';
import TimeBilling from './pages/TimeBilling';
import ClientPortal from './pages/ClientPortal';
import Settings from './pages/Settings';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="matters" element={<MattersList />} />
          <Route path="matters/:id" element={<MatterDetail />} />
          <Route path="clients" element={<ClientDirectory />} />
          <Route path="clients/:id" element={<ClientProfile />} />
          <Route path="documents" element={<DocumentManagement />} />
          <Route path="calendar" element={<CalendarView />} />
          <Route path="billing" element={<TimeBilling />} />
          <Route path="portal" element={<ClientPortal />} />
          <Route path="settings" element={<Settings />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;