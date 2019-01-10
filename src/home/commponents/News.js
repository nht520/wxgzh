import React, { Component,Fragment } from "react";
// import { withRouter } from "react-router-dom";
import { Button } from 'antd-mobile';
class News extends Component {

    constructor(props){
        super(props);
        this.state=({
            title:"我是新闻页",
        })
    }
    render(){
        return(
            <Fragment>
                <div>{this.state.title}</div>
                <Button onClick={this.fanhui}>跳转</Button>
                <h1>111111111111111</h1>
            </Fragment>
        )
    }

}

// export default withRouter(News);
export default News;