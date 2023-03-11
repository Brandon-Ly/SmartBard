import React, { useState, useEffect } from 'react';
import PriorityAnnouncement from '../components/Landing/PriorityAnnouncement';
import Announcements from '../components/Landing/Announcements';
import axios from 'axios';

export default function Home() {
    window.speechSynthesis.cancel()

    const [data, setData] = useState([]);
    const [foundPost, setFoundPost] =useState(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/announcements?status=approved&datefrom=2000-01-01&dateto=2050-01-01');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        fetchData();
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
            <PriorityAnnouncement priorityPost={foundPost}/>
            <Announcements data={data} />
        </React.Fragment>
    )
}

