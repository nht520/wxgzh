import React, {  Component } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper
} from "../style";

class login  extends  Component{
    render(){
        const { loginButton } = this.props;
        return(
            <LoginWrapper>
                <input type="text" />
                <input type="password" />
                <button onClick={loginButton}>提交</button>
            </LoginWrapper>
        )
    }
    componentDidMount(){

    }
}
// mapStateToProps 一般用于获取数据渲染
// initMapDispatchToProps 获取改变数据
const mapState = ( state ) => ({
    loginButton(){
        alert("")
    }
});
export default connect(mapState,null)(login);