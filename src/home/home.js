import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Time from './commponents/Time';
import List from './commponents/List';
import axios from 'axios';
import {
    HomeWrapper,
} from './style'
class Home  extends  Component{
    render(){
        return(
            <HomeWrapper>
                <Time/>
                <List/>
            </HomeWrapper>
        )
    }
    componentDidMount (){
        axios.get('api/list.json')
            .then((res)=>{
                const result = res.data.data;
                console.log(res)
                const action = {
                    type:'change_home_data',
                    topickList: result.topickList,
                }
                this.props.changeHomeDate(action)
            })
    }
}
const mapDispatch = ( dispatch ) =>({
    changeHomeDate(action){
        dispatch(action);
    }
})
export default connect(null,mapDispatch)(Home);