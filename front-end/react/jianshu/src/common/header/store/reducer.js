import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 0,
    totalPage: 0,
    mouseEnter: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_INPUT_FOCUS: {
            return state.set('focused', !state.get('focused'))
        }
        case constants.CHANGE_LIST: {
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        }
        case constants.MOUSE_ENTER: {
            return state.set('mouseEnter', true);
        }
        case constants.MOUSE_LEAVE: {
            return state.set('mouseEnter', false);
        }case constants.CHANGE_PAGE:{
            return state.set('page', action.page)
        }
        default:
            return state;
    }
}
