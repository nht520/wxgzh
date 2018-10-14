import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Time from './commponents/Time';
import List from './commponents/List';
import { actionCreators } from './store';
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
        this.props.changeHomeDate();
    }
}
const mapDispatch = ( dispatch ) =>({
    changeHomeDate(){
       dispatch(actionCreators.getHomeInfo());
    }
})
export default connect(null,mapDispatch)(Home);