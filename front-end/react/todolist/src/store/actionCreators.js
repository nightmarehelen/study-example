import {ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_INPUT_VALUE} from "./actionType"
export const getInputChangeAction = value =>({
    type : CHANGE_INPUT_VALUE,
    value : value
});

export const getAddTodoItemAction = () =>({
    type : ADD_TODO_ITEM,
});

export const getDeleteTodoItemAction = index =>({
    type : DELETE_TODO_ITEM,
    index : index
});
