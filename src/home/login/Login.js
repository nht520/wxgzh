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
import { Toast,Button,Flex} from 'antd-mobile';
//引用提示
class login  extends  Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            pssword:"",
            text:"",
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
                    <Button onClick={this.loginButton} >登录</Button>
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
    };
    pssword = (e) => {
        this.setState({
            pssword:e.target.value,
        })
    };
    showToast = () => {
        Toast.info(this.state.text);
    };
    //判断是否按下了回车
    inputKeyDown = (e) =>{
        if (e.keyCode === 13) {
            this.loginButton()
        }
    };

    loginButton = () => {
        const _this = this;
        if (_this.state.username === '' || _this.state.username === null) {
            this.setState({
                    text:"请输入账号",
            },()=>_this.showToast())
        }
        else if (_this.state.pssword === '' || _this.state.pssword === null) {
            this.setState({
                text:"请输入密码",
            },()=>_this.showToast());
        }
        else if (/^[\d\D]{6,12}$/.test(_this.state.pssword) === false) {
            this.setState({
                text:"密码在6-12位英文数字之间",
            },()=>_this.showToast());
        }
        else {
            //把用户名  密码统一存在_param里面  把_param提交到后台
            const _param = new URLSearchParams();
                  _param.append("empName",_this.state.username);
                  _param.append("empPassword",_this.state.pssword);
            var api ="http://md.9knx.com:9099/sale/login";
            Axios.post(api,_param).then((res)=>{
                console.log(res);
                if(res.status===200){
                    const code = res.data.status;
                    if( code === "1" ){
                        //将数据存在storage
                        storage.set("user",res.data.data);
                        _this.props.history.push('/Home')
                    }else if( code === "0" ){
                        this.setState({
                            text:res.data.message,
                        },()=>_this.showToast());
                    }else if( code === "2"){
                        this.setState({
                            text:res.data.message,
                        },()=>_this.showToast());
                    }else{
                        this.setState({
                            text:res.data.message,
                        },()=>_this.showToast());
                    }
                }else{
                    //如果登录失败 就返回错误信息
                    this.setState({
                        text:res.data.message,
                    },()=>_this.showToast());
                }
            },(err)=>{
                console.log(err);
            });
        }
    };
    componentDidMount() {

    }
    componentWillUnmount() {
    }
    componentDidUpdate(){
    }

}
// mapStateToProps 一般用于获取数据渲染
// initMapDispatchToProps 获取改变数据
const mapState = ( state ) => ({

});
export default connect(mapState,null)(login);