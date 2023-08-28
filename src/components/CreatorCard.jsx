import React from 'react';
import { useNavigate } from "react-router-dom"
import './CreatorCard.css'

function CreatorCard({user}) {

    const navigate = useNavigate()

    var modalButton = {
        backgroundImage: 'url(' + user.imageURL + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }

    return (
        <div className="creator_box" style={modalButton} key={user}>
            Name: {user.username}
            <button className = "custom-buttons" onClick={()=> navigate('/view/' + user.id)}> View </button>
            <button className = "custom-buttons"  onClick={()=> navigate('/edit/' + user.id)}> Edit </button>
        </div>
    )
}

export default CreatorCard