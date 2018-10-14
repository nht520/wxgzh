import axios from 'axios';
import * as actionTypes  from './actionTypes';
// import { fromJS } from 'immutable';
const changHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topickList: result.topickList,
})
export const getHomeInfo = () =>{
    return (dispatch) => {
        axios.get('api/list.json')
          .then((res)=>{
            const result = res.data.data;
            dispatch(changHomeData(result));
        })
    }
}