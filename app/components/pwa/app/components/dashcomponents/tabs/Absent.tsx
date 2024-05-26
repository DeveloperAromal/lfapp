"use client"

import React, { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface User {
  id: number;
  email: string;
  className: string;
  name: string;
  div: string;
}

interface AbsentDay {
  id: number;
  class: string;
  name: string;
  day: number;
  month: string;
  description: string;
  div: string; // Add 'div' to match the usage
}

export default function Absent() {
  const [user, setUser] = useState<User | null>(null);
  const [absentDays, setAbsentDays] = useState<AbsentDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<AbsentDay | null>(null);

  const supabase = createClientComponentClient();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const fetchUser = async () => {
        try {
          const { data: userData, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', userEmail)
            .single();

          if (error) throw error;

          setUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };

      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (user) {
      const fetchAbsentDays = async () => {
        try {
          const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toLowerCase();
          const { data: absentData, error } = await supabase
            .from('AbsentDays')
            .select('*')
            .eq('class', user.className)
            .eq('name', user.name)
            .eq('div', user.div) // Ensure 'div' is included in AbsentDay
            .eq('month', currentMonth);

          if (error) throw error;

          console.log('AbsentDays data:', absentData); // Debugging statement
          setAbsentDays(absentData ?? []);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching absent days:', error);
          setLoading(false);
        }
      };

      fetchAbsentDays();
    }
  }, [user]);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const absentDay = absentDays.find(
      (absent) => absent.day === day
    );
    return { day, absentDay };
  });

  const handleDayClick = (day: AbsentDay) => {
    setSelectedDay(day);
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 lg:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Absent Days in {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}
            </h1>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="font-semibold">{day}</div>
              ))}
              {Array.from({ length: firstDayIndex }).map((_, index) => (
                <div key={index}></div>
              ))}
              {daysArray.map((dayObj, index) => (
                <div
                  key={index}
                  className={`border items-center  border-stone-700 rounded-md p-2 h-24 flex flex-col justify-center cursor-pointer ${
                    dayObj.absentDay ? 'bg-red-500 hover:bg-red-600' : 'bg-green-50 hover:bg-green-100'
                  }`}
                  onClick={() => dayObj.absentDay && handleDayClick(dayObj.absentDay)}
                >
                  <div className="font-semibold">{dayObj.day}</div>
                  {dayObj.absentDay && <div className="text-xs text-red-600">{dayObj.absentDay.description}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedDay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-2">{selectedDay.description}</h2>
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
