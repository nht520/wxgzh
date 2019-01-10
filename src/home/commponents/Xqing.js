import React, { Component,Fragment } from "react";
class Xqing extends Component {

    constructor(props){
        super(props);
        this.state=({
            title:"我是详情页",
        })
    }

    render(){
        return(
            <Fragment>
                <div>{this.state.title}</div>
                <h1>111111111111</h1>
            </Fragment>
        )
    }

}

export default Xqing;