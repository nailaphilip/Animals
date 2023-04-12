import React from 'react';
import Card from './UI/Card';
import Search from './UI/Search';
import './Birds.css'

const Birds = (props) => {
    // here we take the original data, which is props.data
const searchFilter = props.data.filter(bird => {
    return bird.name.includes(props.searchInput)
})

    return (
        <div className='birds'>
            <h2>Birds {props.data.length}</h2>
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
    );
};

export default Birds;