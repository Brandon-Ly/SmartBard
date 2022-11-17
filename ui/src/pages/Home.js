import React from 'react'
import PriorityAnnouncement from '../components/PriorityAnnouncement';
import Announcements from '../components/Announcements';

export default function Home() {
  return (
    <React.Fragment>
      <PriorityAnnouncement />
      <Announcements />
    </React.Fragment>
  )
}

