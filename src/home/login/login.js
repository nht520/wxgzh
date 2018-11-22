import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link,} from "react-router-dom";
import Axios from 'axios';
import storage from '../../storeage/storage';
import bj from '../../home/asstas/images/bj.jpg'
import {
    LoginWrapper,
    LoginFrom
} from "../style";
import { Button,Flex} from 'antd-mobile';
class login  extends  Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            pssword:""
        }
    }
    render(){
        return(
            <LoginWrapper>
                <img className="bj" alt="111" src={bj} />
                <LoginFrom>
                    <ul>
                        <li>
                            <input type="text" onChange={this.username} placeholder="请输入账号"/>
                        </li>
                        <li>
                            <input type="password" onChange={this.pssword}  onKeyDown={this.inputKeyDown}  placeholder="请输入密码" />
                        </li>
                    </ul>
                    <Button onClick={this.loginButton}>登录</Button>
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
    username = (e) =>{
        this.setState({
            username:e.target.value,
        })
    }
    pssword = (e) => {
        this.setState({
            pssword:e.target.value,
        })
    }
    //判断是否按下了回车
    inputKeyDown = (e) =>{
        if (e.keyCode === 13) {
            this.loginButton()
        }
    }
    loginButton = () => {
        const _this = this;
        if (_this.state.username === '') {
            alert("请输入账号")
        } else if (_this.state.pssword === '' || _this.state.pssword === null) {
            alert("请输入密码")
        } else if (/^[\d\D]{6,12}$/.test(_this.state.pssword) === false) {
            alert("密码在6-12位英文数字之间")
        } else {
            //把用户名  密码统一存在_param里面  把_param提交到后台
            const _param = new URLSearchParams();
                  _param.append("username",_this.username);
                  _param.append("pssword",_this.pssword);
            var api ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
            Axios.post(api,_param).then((res)=>{
                console.log(res);
                // if(res.data.result[0].catid==="20"){
                if(_this.state.username==="admin",_this.state.pssword==="a123456"){
                    storage.set("user",res.data.result);
                    //登录成功跳转到首页
                    this.props.history.push('/home')
                }else{
                    //如果返回错误提示
                    _this.text=res.data.result.msg;
                }
            },(err)=>{
                console.log(err);
            });
        }
    }
    componentDidMount(){

    }

}
// mapStateToProps 一般用于获取数据渲染
// initMapDispatchToProps 获取改变数据
const mapState = ( state ) => ({

});
export default connect(mapState,null)(login);