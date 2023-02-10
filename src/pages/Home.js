import React from 'react'
import PriorityAnnouncement from '../components/Landing/PriorityAnnouncement';
import Announcements from '../components/Landing/Announcements';

export default function Home() {
  return (
    <React.Fragment>
      <PriorityAnnouncement />
      <Announcements />
    </React.Fragment>
  )
}

