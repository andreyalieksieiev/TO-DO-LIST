import * as actionType from './actionTypes';

let initialState = {
  messages: [],
  post: {
    text: '',
    id: ''
  }
}

const ItemReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_TEXT:
      return {
        ...state,
        post: action.payload
      }
    case actionType.ADD_ITEM:
      return {
        ...state,
        messages: action.payload,
        post: {
          text: '',
          id: ''
        }
      }  
    case actionType.DELETE_ITEM: 
      return {
        ...state,
        messages: action.payload
      }  
    default: 
        return state
  }
}

export default ItemReduser;