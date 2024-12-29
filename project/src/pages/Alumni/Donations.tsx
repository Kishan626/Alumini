import React from 'react';
import { DollarSign, Heart, Trophy, Users } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/dashboard/StatCard';

interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  donors: number;
  daysLeft: number;
  image: string;
}

const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    title: "Scholarship Fund 2024",
    description: "Help support the next generation of students with our annual scholarship fund.",
    goal: 50000,
    raised: 32450,
    donors: 145,
    daysLeft: 45,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Research Lab Equipment",
    description: "Support our university's research capabilities with new laboratory equipment.",
    goal: 75000,
    raised: 45000,
    donors: 89,
    daysLeft: 60,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
  }
];

export function AlumniDonationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Donations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Donations"
          value="$77,450"
          icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Active Campaigns"
          value="4"
          icon={<Heart className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Total Donors"
          value="234"
          icon={<Users className="h-6 w-6 text-indigo-600" />}
        />
        <StatCard
          title="Goals Reached"
          value="8"
          icon={<Trophy className="h-6 w-6 text-indigo-600" />}
        />
      </div>

      <div className="grid gap-8">
        {SAMPLE_CAMPAIGNS.map((campaign) => (
          <Card key={campaign.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                <p className="mt-2 text-gray-600">{campaign.description}</p>
                
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                          Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {Math.round((campaign.raised / campaign.goal) * 100)}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                      <div
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">${campaign.raised.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Raised</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.donors}</p>
                    <p className="text-sm text-gray-500">Donors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{campaign.daysLeft}</p>
                    <p className="text-sm text-gray-500">Days Left</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="primary">Donate Now</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}