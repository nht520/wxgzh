import React, { Component,Fragment } from "react";
class Detils extends Component {

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
            </Fragment>
        )
    }

}

export default Detils;