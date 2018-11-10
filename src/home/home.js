import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Time from './commponents/Time';
import List from './commponents/List';
import { actionCreators } from './store';
import storage from '../storeage/storage';
import {
    HomeWrapper,
} from './style'
import Header from "../common/header/header";
class Home  extends  Component{
    render(){
        return(
            <HomeWrapper>
                <Header ref="logout"/>
                <Time/>
                <List/>
            </HomeWrapper>
        )
    }
    home = () =>{
        var user = storage.get("user");
        if(user==null){
            this.props.history.push('/')
        }else{
            this.props.history.push('/home')
        }
    }
    logout = () =>{
        this.refs.logout.logout();
    }
    componentDidMount (){
        const _this = this;
        _this.home();
        this.props.changeHomeDate();
    }
}
const mapDispatch = ( dispatch ) =>({
    changeHomeDate(){
       dispatch(actionCreators.getHomeInfo());
    }
})
export default connect(null,mapDispatch)(Home);