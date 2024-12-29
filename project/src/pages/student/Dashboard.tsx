import React from 'react';
import { Briefcase, Calendar, Users, BookOpen } from 'lucide-react';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card } from '../../components/ui/Card';

export function StudentDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          title="Alumni Network"
          value="2,543"
          icon={<Users className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Resources"
          value="45"
          icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Job Opportunities</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Loading job opportunities...</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Loading events...</p>
          </div>
        </Card>
      </div>
    </div>
  );
}