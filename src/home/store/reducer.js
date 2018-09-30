const { fromJS } = require('immutable');
//defaultState放store默认数据
const defaultState = fromJS({
    topickList:[]
});
// immutable的set的方法会结合之前immutable对象的值
//和设置的值，返回一个全新的对象
export default  ( state = defaultState, action ) => {
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topickList:fromJS(action.topickList),
            })
        default:
            return state;
    }
    // if(action.type === actionTypes.CHANGE_LIST){
    //     return state.set('ListItem',action.data)
    // }
}
