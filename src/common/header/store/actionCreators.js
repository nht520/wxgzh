import * as actionTypes  from './actionTypes'
import { fromJS } from 'immutable';
import axios from 'axios'

// export const searchFocus = () => ({
//     type:actionTypes.SEARCH_FOCUS
// })

//请求的数据
const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data)
});
//点击请求数据-*
export const getList = () => {
    return(dispatch) =>{
        axios.get('/api/title.json')
            .then((res) =>{
                const data = res.data;
                // console.log(res);
                dispatch(changeList(data.data));
            }).catch(( err )=>{
            console.log(err)
        })
    }
}