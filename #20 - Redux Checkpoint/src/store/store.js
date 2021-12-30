import { createStore } from 'redux';

const taskReducer = function(state=[], action) {

    if(action.type === 'delete-task'){
        return state.filter((task,id) => +id !== +action.id);
    }

    if(action.type === 'add-task'){
        return [...state, action.text];
    }

    return state;
}


const store = createStore(taskReducer);
export default store; 