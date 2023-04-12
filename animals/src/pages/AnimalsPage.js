import React, {Component} from 'react';

import Animals from './components/Animals';

import './AnimalsPage.css';
import {animals} from '../animalsList';
import Footer from './components/Footer';
import Header from './components/Header';


class AnimalsPage extends Component {
  state = {
    animals: animals,
    title: 'Living world',
    searchInput: ''
  }

  likesHandler = (name, action) => {
    // prevState is the latest or current state
      this.setState((prevState) => {
        // the function inside the setState
        const updatedArray = prevState.animals.map((animal) => {
          // we check if the animal name matching the name coming in, that is what animal we are touching
          if (animal.name === name) {
            // then we are checking the action
            if (action === 'add') {
              // the object needs to be opened to see the properties of the object, then we can accesss them, so we need the spread operator, if array, then the same but in the [] brackets
              return {...animal, likes: animal.likes + 1}  
            } else { 
              // we need to open the object again for else. If reset, then likes: 0
              return {...animal, likes: animal.likes - 1}
            } 
          } else {
              return animal
          }
        })
        return {
          animals: updatedArray
          // here we unpdate the state
        }
      })
  };


  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
    
  }

searchHandler = (e) => {
  this.setState ({
    // gives possibility to take value of the input and store it to the state
    searchInput: e.target.value
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <div className='cards'>
        <Animals data={this.state.animals} 
        likesHandler={this.likesHandler} 
        removeHandler={this.removeHandler}
        searchHandler={this.searchHandler}
        searchInput={this.state.searchInput}/>
        </div>
        <Footer />

      </div>
    );
  }
}

export default AnimalsPage;

