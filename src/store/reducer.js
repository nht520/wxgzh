import { combineReducers } from 'redux-immutable';
//引用header的数据 as 取别名
import { reducer as headerReducer } from '../common/header/store';
//引用home下面的数据
import { reducer as homeReducer } from '../home/store';

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
})

export default reducer;