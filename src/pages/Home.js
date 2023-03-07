import React, {useEffect, useState} from 'react'
import PriorityAnnouncement from '../components/Landing/PriorityAnnouncement';
import Announcements from '../components/Landing/Announcements';

export default function Home() {

    const [data, setData] = useState([]);
    const [foundPost, setFoundPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:7000/announcements')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    /*
      Find the first post where the priority is true. This is assuming that there can only ever be one post with a true property
      (This should always be the case with a priority announcement)
      */
    useEffect(() => {
        if (data.length > 0) {
            const foundItem = data.find(item => item.priority === true);
            if (foundItem) {
                setFoundPost(foundItem);
            } else {
                console.log("No item with priority found");
            }
        } else {
            console.log("Data is empty");
        }
    }, [data])

    return (
        <React.Fragment>
            <PriorityAnnouncement
                priorityPost={foundPost}/>
            <Announcements
                data={data}/>
        </React.Fragment>
    )
}