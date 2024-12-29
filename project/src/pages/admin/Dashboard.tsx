import React from 'react';
import { Users, Briefcase, Calendar, DollarSign } from 'lucide-react';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card } from '../../components/ui/Card';

export function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Alumni"
          value="1,234"
          icon={<Users className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Active Jobs"
          value="45"
          icon={<Briefcase className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Upcoming Events"
          value="12"
          icon={<Calendar className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Total Donations"
          value="$45,678"
          icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Alumni Registrations</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Loading recent registrations...</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Job Postings</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Loading recent job postings...</p>
          </div>
        </Card>
      </div>
    </div>
  );
}