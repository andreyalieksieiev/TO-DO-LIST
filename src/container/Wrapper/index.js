import React from 'react';

import Header from '../Header';
import Body from '../Body';
import { connect } from 'react-redux';
import { changeText, addItem, deleteItem } from '../../store/actions';

class Wrapper extends React.Component {

  inputChange = e => {   
    const itemText = e.target.value;
    const currentItem = {text: itemText, id: Date.now()};
    this.props.changeText(currentItem)
  } 

  addPost = () => { 
    const newItem = this.props.post;
    if (newItem.text !== '') {
      const New = [...this.props.messages, newItem];
      this.props.addItem(New);
    }
  }

   deleteMessage = id => {
    const filteredItem = this.props.messages.filter(p => {
      return p.id !== id
    })
    this.props.deleteItem(filteredItem)
  }

  render () {
    const { post } = this.props; 
  
    return (
      <div>
        <Header inputChange={this.inputChange} addPost={this.addPost} value={post.text}/>
        <Body messages={this.props.messages} deleteMessage={this.deleteMessage} />
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    post: state.post,
    messages: state.messages
  }
}

export default connect( mapStateToProps, { changeText, addItem, deleteItem } )(Wrapper);