import * as actionTypes  from './actionTypes';
const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    List:[],
});
// immutable的set的方法会结合之前immutable对象的值
//和设置的值，返回一个全新的对象
const changeHomeDate = ( state,action)=>{
    return state.merge({
        List:fromJS(action.List),
    })
}
export default  ( state = defaultState, action ) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeDate(state,action)
        default:
            return state;
    }
    // if(action.type === actionTypes.CHANGE_LIST){
    //     return state.set('ListItem',action.data)
    // }
}
