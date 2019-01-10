import axios from 'axios';
import * as actionTypes  from './actionTypes';
// import { fromJS } from 'immutable';
const changHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    List: result,
});
export const getHomeInfo = () =>{
    return (dispatch) => {
        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
          .then((res)=>{
            const result = res.data.result;
            console.log(result);
            dispatch(changHomeData(result));
        })
    }
}