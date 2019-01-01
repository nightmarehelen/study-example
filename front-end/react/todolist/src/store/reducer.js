import {ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_INPUT_VALUE} from "./actionType"

const defaultState = {
    inputValue :'',
    list:[]
};

export default (state = defaultState, action) => {
    console.log(state, action);
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === CHANGE_INPUT_VALUE){
        newState.inputValue = action.value;
        return newState;
    }else if(action.type === ADD_TODO_ITEM && newState.inputValue){
        newState.list =[ ...newState.list, newState.inputValue];
        newState.inputValue = "";
        return newState;
    }else if(action.type === DELETE_TODO_ITEM){
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}