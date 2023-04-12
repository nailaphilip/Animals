import React, {Component} from 'react';
import './BirdsPage.css';
import Birds from './components/Birds';
import {birds} from '../animalsList';
import Footer from './components/Footer';
import Header from './components/Header';



class BirdsPage extends Component {
    state = {
      birds: birds,
      title: 'Living world',
      searchInput: ''
    }
  
    likesHandler = (name, action) => {
      // prevState is the latest or current state
        this.setState((prevState) => {
          // the function inside the setState
          const updatedArray = prevState.birds.map((bird) => {
            // we check if the animal name matching the name coming in, that is what animal we are touching
            if (bird.name === name) {
              // then we are checking the action
              if (action === 'add') {
                // the object needs to be opened to see the properties of the object, then we can accesss them, so we need the spread operator, if array, then the same but in the [] brackets
                return {...bird, likes: bird.likes + 1}  
              } else { 
                // we need to open the object again for else. If reset, then likes: 0
                return {...bird, likes: bird.likes - 1}
              } 
            } else {
                return bird
            }
          })
          return {
            birds: updatedArray
            // here we unpdate the state
          }
        })
    };
  
  
    removeHandler = (name) => {
      const updatedArray = this.state.birds.filter(bird => bird.name !== name)
      this.setState({
        birds: updatedArray
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
          <Birds data={this.state.birds} 
          likesHandler={this.likesHandler} 
          removeHandler={this.removeHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput}/>
  
          <Footer />
  
        </div>
      );
    }
  }
  
  export default BirdsPage;