import * as actionTypes  from './actionTypes'
const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    ListItem:[]
});
export default  ( state = defaultState, action ) => {
    switch(action.type){
        case actionTypes.CHANGE_LIST:
            return state.set('ListItem',action.data);
        default:
    }
    // if (action.type === actionTypes.SEARCH_FOCUS){
    //     // immutable的set的方法会结合之前immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused',true)
    // }
    // if (action.type === actionTypes.SEARCH_BLUR){
    //     return state.set('focused',false)
    // }

    return state;
}
