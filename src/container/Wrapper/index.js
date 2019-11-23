import React from 'react';

import Header from '../Header';
import Body from '../Body';

class Wrapper extends React.Component {
  state = {
    messages: [],
    post: {
      text: '',
      id: ''
    }
  }

  inputChange = e => {   
    const itemText = e.target.value;
    const currentItem = {text: itemText, id: Date.now()};
    this.setState({ post: currentItem })
  } 

  addPost = () => { 
    const newItem = this.state.post;
    if (newItem.text !== '') {
      const New = [...this.state.messages, newItem];
      this.setState({
        messages: New,
        post: {text: '', id: ''}
      })
    }
  }

   deleteMessage = id => {
    const filteredItem = this.state.messages.filter(p => {
      return p.id !== id
    })
    this.setState({ messages: filteredItem })
  }

  render () {
    const {messages, post } = this.state;   
    return (
      <div>
        <Header inputChange={this.inputChange} addPost={this.addPost} value={post.text} />
        <Body messages={messages} deleteMessage={this.deleteMessage} />
      </div>
    )
  }
} 

export default Wrapper;