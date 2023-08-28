import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { supabase } from '../client';
import '../App.css'
import { useParams, Link } from 'react-router-dom';

export default function ViewCreator() {

    const params = useParams();
    const queriedID = params.id

    const [userData, setUserData] = useState(null);
    const [loaded, setLoaded] = useState(false);

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

    function redirect (url) {
        window.location.href = url;
    }

    async function deleteUser(userId) {
        try {
            const { _, e } = await supabase.from('creators').delete().eq('id', userId)
            if (e) {
                return null
            }
            redirect("/")
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(()=> {
        async function loadUserData() {
            const data = await getUserData(queriedID);
            setUserData(data);
        } loadUserData(); setLoaded(true);
    }, [])

    return (
        <div>   
            <Header/>

            {loaded === true &&

                <div className = "id_card">
                    <div className = "photo">
                        <img src={userData?.imageURL || "../src/assets/missing.png"} alt="User" />
                    </div>
                    <div className="info">
                        <h3>Name</h3>
                        <span>{userData?.username || "Missing"}</span>
                        <h3/>

                        <h3>Description</h3>
                        <span>{userData?.description || "Missing"}</span>
                        <h3/>
                            <div className="button-container_header">
                                <button className="custom-buttons_header"  onClick={()=> redirect("https://youtube.com/@" + userData?.youtube_url)} > Youtube </button>
                                <div className="pipe"></div>
                                <button className="custom-buttons_header" onClick={()=> redirect("https://instagram.com/" + userData?.instagram_url)}> Instagram </button>
                             </div>
                        <h3/>

                    </div>
                </div>
            }
            
            <div>
                <Link to={'/edit/' + queriedID}> <button className="custom-buttons"> Edit </button> </Link>
                <button className="custom-buttons" onClick={() => deleteUser(queriedID)}> Delete </button>
            </div>

        </div>
    );

  }