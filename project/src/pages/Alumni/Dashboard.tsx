import React from 'react';
import { Users, Briefcase, Calendar, DollarSign } from 'lucide-react';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card } from '../../components/ui/Card';

export function AlumniDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome Back, Alumni!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Network Connections"
          value="2,543"
          icon={<Users className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Available Jobs"
          value="156"
          icon={<Briefcase className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Upcoming Events"
          value="8"
          icon={<Calendar className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Total Donations"
          value="$12,450"
          icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}