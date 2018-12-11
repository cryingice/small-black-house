import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
import {
  combineReducers
} from 'redux'

const {
  SHOW_ALL
} = VisibilityFilters
const initialState = {
  VisibilityFilter: SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      break;
    case TOGGLE_TODO:
      return state.map(x => {
        if (x.text == action.text) {
          return {
            text: x.text,
            completed: !x.completed
          }
        }
        return x;
      })
      break;
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
      break;
    default:
      return state;
      break;
  }
}
// function todoApp(state = initialState, action) {
//   return {
//     visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//     todos:todos(state.todos,action)
//   }
// }

// export default todoApp

export default combineReducers({
  visibilityFilter,
  todos
})