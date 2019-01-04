import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
export const SearchFocus = () => (
    {
        type: constants.SEARCH_INPUT_FOCUS
    }
)

const ChangeList = (data)=>({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/ 10)
})

export const MouseEnter = ()=>({
    type: constants.MOUSE_ENTER
})

export const MouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
})

export const ChangePage = (page)=>({
    type: constants.CHANGE_PAGE,
    page: page
})
export const GetList =()=>{
    return (dispatch) =>{
        console.log('GetList')
        axios.get('/api/header/searach-list.json').then((res) =>{
            console.log(res);
            const data =res.data;
            console.log(data);
            dispatch(ChangeList(data.data));
        }).catch((err) =>{
            console.log(err)
        });
    }
}

