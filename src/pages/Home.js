import React from 'react'
import PriorityAnnouncement from '../components/Landing/PriorityAnnouncement';
import Announcements from '../components/Landing/Announcements';

export default function Home() {
    window.speechSynthesis.cancel()
    return (
        <React.Fragment>
            <PriorityAnnouncement/>
            <Announcements/>
        </React.Fragment>
    )
}

