import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { supabase } from './client'
import CreatorCard from './components/CreatorCard';
import './App.css'
import '@picocss/pico'

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchProfiles() {
      const { data, e } = await supabase.from('creators').select('*');
      if (e) {
        console.error(e);
      } else {
        setLoaded(true);
        setUserProfiles(data);
      }
    }
    fetchProfiles();
  }, [])

  return (
    <>
      <Header/>


      {/* Loading Screen */}
      <div className="body">
        {loaded === false &&
          <div className="box"> Loading Creators... </div>
        }

        {loaded === true && userProfiles.length === 0 &&
          <div className="box"> Add Creators Above! </div>
        } 

        {loaded === true && userProfiles.map((user) => (
            <CreatorCard user={user} key={user.id}/>
          ))
        }
      </div>
       {/* Loading Screen End */}
      

    </>
  )
}

export default App
