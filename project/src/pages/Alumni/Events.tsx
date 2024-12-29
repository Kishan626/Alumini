import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  description: string;
  image: string;
}

const SAMPLE_EVENTS: Event[] = [
  {
    id: 1,
    title: "Annual Alumni Networking Gala",
    date: "March 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Hotel, Downtown",
    attendees: 120,
    description: "Join us for an evening of networking, dinner, and inspiring talks from successful alumni.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Tech Industry Panel Discussion",
    date: "March 20, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual Event",
    attendees: 250,
    description: "Learn from industry leaders about the latest trends in technology and career opportunities.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
  }
];

export function AlumniEventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
        <Button variant="primary">Create Event</Button>
      </div>

      <div className="grid gap-8">
        {SAMPLE_EVENTS.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.description}</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} Attending
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="primary">Register Now</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}