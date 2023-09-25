import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [],
};
// initialState is default parameter for the state

export function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // returning whatever is there in out state ...cureretly we are having any state so creating the initial state
      //returning a single object
      return {
        //::The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
        ...state,
        todos: [...state.todos,
             {
                text:action.text,
                completed:false
             }
            ],
      };
      case TOGGLE_TODO:
        return{
            ...state,
            todos:state.todos.map((todos, i) => {
                if(i===action.index){
                    // togglling todo using not operator
                    todos.completed = !todos.completed
                }
                return todos;
            })
        }
        default:
            return state;
  }
}
