import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Event {
  id?: number;
  month: string;
  day: number;
  description: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  const daysInMonth = 30; // Example for June
  const firstDayIndex = 5; // Assuming the 1st of June is a Friday (0=Sunday, 1=Monday, ..., 6=Saturday)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let { data, error } = await supabase
          .from('Events')
          .select('*')
          .eq('month', 'June'); // Adjust the query as needed

        if (error) throw error;

        console.log('Fetched events:', data); // Log the fetched data

        setEvents(data as Event[]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    event: events.find(event => event.day === i + 1) || null,
  }));

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">June</h1>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="font-semibold text-stone-800">{day}</div>
              ))}
              {/* Empty cells for days before the first day of the month */}
              {Array.from({ length: firstDayIndex }).map((_, index) => (
                <div key={index}></div>
              ))}
              {/* Days of the month */}
              {daysArray.map((day, index) => (
                <div
                  key={index}
                  className={`border border-stone-600 rounded-md p-2 h-24 flex flex-col justify-between cursor-pointer ${day.event ? 'bg-blue-500' : ''}`}
                  onClick={() => day.event && handleEventClick(day.event)}
                >
                  <div className="font-semibold text-stone-900">{day.day}</div>
                  {day.event && <div className="text-xs text-white">{day.event.description}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-2">{selectedEvent.description}</h2>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
