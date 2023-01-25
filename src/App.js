import React, { useState } from 'react';
import './style.css';
import SideNav from './SideNav';
import Calendar from './Calendar';
export default function App() {
  const [filteredEvent, setFilteredEvents] = useState(events);
  return (
    <main class="main">
      <aside>
        <SideNav />
      </aside>
      <Calendar events={filteredEvent} />
    </main>
  );
}

const events = [
  {
    id: 1,
    invitees: [{ id: 12, name: 'ABC' }],
    timings: {
      startTime: '9',
      endTime: '10',
      format: '24H',
      day: 'MONDAY',
      date: '12222022',
    },
    category: 'work',
    organiser: {
      id: 13,
      name: 'test',
    },
    eventDetails: {
      url: '',
      location: '',
      inviteLink: 'google.com',
      title: 'Zeta Interview',
    },
  },
  {
    id: 11,
    invitees: [{ id: 12, name: 'ABC' }],
    timings: {
      startTime: '9',
      endTime: '10',
      format: '24H',
      day: 'MONDAY',
      date: '12222022',
    },
    category: 'reminder',
    organiser: {
      id: 13,
      name: 'test',
    },
    eventDetails: {
      url: '',
      location: '',
      inviteLink: 'google.com',
      title: 'Cofee Break',
    },
  },
  {
    id: 12,
    invitees: [{ id: 12, name: 'ABC' }],
    timings: {
      startTime: '9',
      endTime: '10',
      format: '24H',
      day: 'MONDAY',
      date: '12222022',
    },
    category: 'personal',
    organiser: {
      id: 13,
      name: 'test',
    },
    eventDetails: {
      url: '',
      location: '',
      inviteLink: 'google.com',
      title: 'another events',
    },
  },
  {
    id: 2,
    invitees: [{ id: 12, name: 'ABC' }],
    timings: {
      startTime: '11',
      endTime: '12',
      format: '24H',
      day: 'MONDAY',
      date: '12222022',
    },
    category: 'reminder',
    organiser: {
      id: 13,
      name: 'test',
    },
    eventDetails: {
      url: '',
      location: '',
      inviteLink: 'google.com',
      title: 'Leetcode Contest',
    },
  },
  {
    id: 2,
    invitees: [{ id: 12, name: 'ABC' }],
    timings: {
      startTime: '11',
      endTime: '12.5',
      format: '24H',
      day: 'TUESDAY',
      date: '12222022',
    },
    category: 'work',
    organiser: {
      id: 13,
      name: 'test',
    },
    eventDetails: {
      url: '',
      location: '',
      inviteLink: 'google.com',
      title: 'sample title',
    },
  },
];

// modal on hover

//
