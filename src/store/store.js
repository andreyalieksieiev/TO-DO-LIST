import { createStore } from 'redux';

import ItemReduser from './reducer';

const store = createStore(ItemReduser);

export default store;