import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../App.css'
import { supabase } from '../client';

export default function AddCreator() {

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [ytURL, setYTUrl] = useState('');
    const [instaURL, setInstaURL] = useState('');

    const upsertUser = async () => {

        const userProfile = {
            username : username,
            description : description,
            imageURL : imageURL,
            youtube_url : ytURL,
            instagram_url : instaURL
        }

        try {
          const { _, e } = await supabase.from('creators').insert([userProfile]);
          if (e) {
            console.error(e);
          } 
        } catch (error) {
          console.error('Error inserting data:', error.message);
        }
      };

    return (
      <div>
        <Header/>

        <h1>Create A Creator!</h1>

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

        <button className="custom-buttons" onClick={()=> upsertUser().then(() => window.location.href = "/")}> Upload Creator! </button>

      </div>
    );

  }