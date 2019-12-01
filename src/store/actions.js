import * as actionTypes from './actionTypes'

export const changeText = (payload) => ({type: actionTypes.CHANGE_TEXT, payload });
export const addItem = (payload) => ({type: actionTypes.ADD_ITEM, payload });
export const deleteItem = (payload) => ({type: actionTypes.DELETE_ITEM, payload});