import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[
        {
            id: 1,
            title: '社会热点1',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 2,
            title: '社会热点2',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 3,
            title: '社会热点3',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 4,
            title: '社会热点4',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 5,
            title: '社会热点5',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 1,
            title: '社会热点',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        },
        {
            id: 6,
            title: '社会热点6',
            imgUrl:'https://upload-images.jianshu.io/upload_images/654237-fbb1ee27b04fcbd1.jpg?imageMogr2/auto-orient/'
        }
    ]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
