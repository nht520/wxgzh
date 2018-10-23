import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link,} from "react-router-dom";
import bj from '../../home/asstas/images/bj.jpg'
import {
    LoginWrapper,
    LoginFrom
} from "../style";
import { Button,Flex } from 'antd-mobile';
class login  extends  Component{
    render(){
        const { loginButton } = this.props;
        return(
            <LoginWrapper>
                <img className="bj" alt="111" src={bj} />
                <LoginFrom>
                    <ul>
                        <li>
                            <input type="text" placeholder="请输入账号"/>
                        </li>
                        <li>
                            <input type="password"  placeholder="请输入密码" />
                        </li>
                    </ul>
                    <Button onClick={loginButton}>登录</Button>
                    <Flex className="ina">
                        <Flex.Item>
                            <Link to="/Home">账号激活</Link>
                        </Flex.Item>
                        <Flex.Item className="right">
                            <Link to="/Home">忘记密码？</Link>
                        </Flex.Item>
                    </Flex>
                    <Flex className="shuom">
                        说明：
                    </Flex>
                    <Flex className="shuom">
                        首次使用门店销售数据查询系统的真善美连锁店员工
                        ，请先使用账号激活，通过身份验证后方可使用直接登
                        陆。
                    </Flex>
                </LoginFrom>
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
        alert("5")
    }
});
export default connect(mapState,null)(login);