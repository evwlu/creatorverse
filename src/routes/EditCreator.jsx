import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { supabase } from '../client';
import '../App.css'
import { useParams } from 'react-router-dom';

export default function EditCreator() {

    const params = useParams();
    const queriedID = params.id;
    const [loaded, setLoaded] = useState(false);

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [ytURL, setYTUrl] = useState('');
    const [instaURL, setInstaURL] = useState('');

    async function getUserData(userId) {
        try {
            const { data, e } = await supabase.from('creators').select('*').eq('id', userId)
            if (e) {
                return null
            }
            return data[0] || null;
        } catch (e) {
            console.error(e)
        }
    }

    const updateUser = async () => {

        const userProfile = {
            username : username,
            description : description,
            imageURL : imageURL,
            youtube_url : ytURL,
            instagram_url : instaURL
        }

        try {
          const { _, e } = await supabase.from('creators').update(userProfile).eq('id', queriedID);
          window.location.href = "/";
          if (e) {
            console.error(e);
          } 
        } catch (e) {
          console.error('Error inserting data:', e.message);
        }
      };

      async function deleteUser(userId) {
        try {
            const { _, e } = await supabase.from('creators').delete().eq('id', userId)
            if (e) {
                return null
            }
            window.location.href = "/"
        } catch (e) {
            console.error(e)
        }
    }



    useEffect(()=> {
        async function loadUserData() {
            const data = await getUserData(queriedID).then((data) => {
                console.log(data)
                setUsername(data.username)
                setDescription(data.description)
                setImageURL(data.imageURL)
                setYTUrl(data.youtube_url)
                setInstaURL(data.instagram_url)
                return data;
            });
        } loadUserData(); setLoaded(true);
    }, [])


    return (
        <div>   
            <Header/>
            {loaded === true && <div>
            <h1>Update A Creator!</h1>

            <div>Name</div>
            <input
                value={username}
                placeholder="Input Name!"
                onChange={(ev) =>{setUsername(ev.target.value)}}
            />

            <div>Description</div>
            <input
                value={description}
                placeholder="Input Description!"
                onChange={(ev) =>{setDescription(ev.target.value)}}
            />

            <div>ImageURL</div>
            <input
                value={imageURL}
                placeholder="Input ImageURL!"
                onChange={(ev) =>{setImageURL(ev.target.value)}}
            />

            <div>Youtube (w/o @)!</div>
            <input
                value={ytURL}
                placeholder="Input YT @!"
                onChange={(ev) =>{setYTUrl(ev.target.value)}}
            />

            <div>Insta Tag (w/o @)!</div>
            <input
                value={instaURL}
                placeholder="Input Insta @!"
                onChange={(ev) =>{setInstaURL(ev.target.value)}}
            />

            <button className="custom-buttons" onClick={()=> updateUser()}> Update Creator </button>
            <button className="custom-buttons" onClick={()=> deleteUser(queriedID)}> Delete Creator </button>
            </div>}

        </div>
    );

  }