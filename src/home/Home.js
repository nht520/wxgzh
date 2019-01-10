import React, {  Component } from 'react';
import { connect } from 'react-redux'
import Time from './commponents/Time';
import List from './commponents/List';
import { actionCreators } from './store';
import storage from '../storeage/storage';
import {BrowserRouter as Router,  Route, Link,} from "react-router-dom";
import {
    HomeWrapper,
} from './style'
import Header from "../common/header/header";
//组件
import News from "./commponents/News";
import Xqing from "./commponents/Xqing";
import Detils from "./commponents/Detils";
// import {Flex} from "antd-mobile/lib/flex";
class Home  extends  Component{
    constructor(props){
        super(props);
        this.state=({
            title:"我是首页"
        })
    }
    render(){
        return(
            <HomeWrapper>
                <Header ref="logout"/>
                <Time/>
                <div>
                    <Router >
                        <div>
                            {/*<header>*/}
                                {/*<Link to="/">新闻</Link>*/}
                                {/*<Link to="/Xqing">详情</Link>*/}
                                {/*<Link to="/Detils">列表</Link>*/}
                            {/*</header>*/}
                            <Route  path="/" exact component={News}/>
                            <Route  path="/Xqing"   component={Xqing}/>
                            <Route  path="/Detils/:aid"   component={Detils}/>
                        </div>
                    </Router>
                </div>
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
    };
    logout = () =>{
        // this.refs.logout.logout();
        // this.props.history.push('/');
    };
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
export default  connect(null,mapDispatch)(Home);