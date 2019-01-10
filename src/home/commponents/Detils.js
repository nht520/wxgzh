import React, { Component,Fragment } from "react";
import Axios from 'axios';
class Detils extends Component {

    constructor(props){
        super(props);
        this.state=({
            title:"我是详情页1",
            id:499,
            list:[],
        })
    }

    render(){
        // const { content } = this.state.list;
        return(
            <Fragment>
                <div>{this.state.list.title}</div>
                <div
                    dangerouslySetInnerHTML={{__html:this.state.list.content}}>
                </div>
            </Fragment>
        )
    }
    requestData(_id){
        let _this = this;
        var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+_id;
        Axios.get(api).then((res)=>{
            console.log(res);
            _this.setState({
                list:res.data.result[0]
            });
            console.log(_this.state.list)
        }).catch(err=>{
            console.log(err)
        })
    }
    componentDidMount (){
        // console.log(this.state.id)
        //先在路由界面加上path="/XwXq/:aid"
        //获取动态路由传值
        // let _id = this.props.match.params.aid;
        let _id =this.props.location.state.aid;
        // let _id = this.state.id;
        console.log(_id);
        this.requestData(_id);
    }
}

export default Detils;