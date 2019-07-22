import React, { Component } from 'react';
import { getStackTraceLines } from 'jest-message-util';
import './main.css'
import Propslike from './Propslike'




class App extends Component {
  state = {
    likes: 0,
    word: 'likes',
    likesTwo: 0,
    wordTwo: 'likes'
  }
  increase = () => {
    if(this.state.likes === 0) {
       this.setState({
        likes: this.state.likes + 1,
        word: 'like'
      })
      } else {
         this.setState({
          likes: this.state.likes + 1,
          word: 'likes'
        }) 
      }
    }
    increaseUp = () => {
      if(this.state.likesTwo === 0) {
         this.setState({
          likesTwo: this.state.likesTwo + 1,
          wordTwo: 'like'
        })
        } else {
           this.setState({
            likesTwo: this.state.likesTwo + 1,
            wordTwo: 'likes'
          }) 
        }
      }
  


  render() {
  return (
    <>
    <div className="like">
      <button id="button" onClick={this.increase}>{this.state.likes} {this.state.word}</button>
      <Propslike likesTwo = {this.state.likesTwo} wordTwo = {this.state.wordTwo} onClick={this.increaseUp}>
      </Propslike>
    </div>
    </>
  );
}
}

export default App;
