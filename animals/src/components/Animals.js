import React from 'react';
import Card from './UI/Card';
import Search from './UI/Search';
import './Animals.css'

const Animals = (props) => {
    // here we take the original data, which is props.data
const searchFilter = props.data.filter(animal => {
    return animal.name.includes(props.searchInput)
})

    return (
        <div className='animals'>
            <h2>Animals {props.data.length}</h2>
            <div className='container'>
            <Search searchHandler={props.searchHandler}/>
            {searchFilter.map((item, i) => <Card 
            // before we had props.data
            key={i} 
            name={item.name} 
            likes={item.likes} 
            removeCard ={() => props.removeHandler(item.name)} 
            addLikes={() => props.likesHandler(item.name, 'add')} 
            removeLikes={() => props.likesHandler(item.name, 'remove')}/>)}
            </div>
        </div>
    );
};

export default Animals;