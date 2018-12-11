import { createdStore } from 'redux'
import todoApp from './reducer';

let store = createdStore(todoApp)

console.log(store.getState());
