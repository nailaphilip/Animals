import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='image'> 
            <img alt={props.name} src={`https://source.unsplash.com/500x400/?${props.name}`}/>
            </div>
            <div className="remove"> 
            <button onClick={props.removeCard}>x</button>
            </div>
            <div className='name'> 
            <h3>{props.name}</h3>
            </div>
            
            <div className="likes_container">
            <button onClick={props.removeLikes}>-</button>
            {props.likes >= 0 ?  <p className="likes">❤️ {props.likes}</p> : <p className="likes"> 💔 {props.likes} </p>}

            <button onClick={props.addLikes}>+</button>
            </div>
            
        </div>
    );
};

export default Card;
