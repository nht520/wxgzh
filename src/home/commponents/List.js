import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { Link, } from "react-router-dom";
import  {
    ListWrapper,
    ListItem,
    ListLeft,
    ListRight
} from '../style'
// import Detils from "./Detils";
class List  extends  Component{
    constructor(props){
        super(props);
        this.state=({
            list:[],
        })
    }
    render(){
        const { list } = this.props;
        const PageList = [];
        PageList.push(
                list.map((item) => (
                <Link to={{
                        pathname:`/Detils`,
                        state:{aid:item.get('aid')}
                         }}
                      key={item.get('aid')}>
                    <ListItem>
                        <ListLeft>
                            <h3 className='title'>{ item.get('title') }</h3>
                            <h3 className='receipts'>实收:{ item.get('dateline') }</h3>
                            <p className='receivable'>毛利:{item.get('aid')}</p>
                        </ListLeft>
                        <ListRight>
                            <p className='quantity'> {item.get('catid')}罐</p>
                            <p className='receivable'>应收: { item.get('aid') }</p>
                        </ListRight>
                    </ListItem>
                </Link>
            ))
        )
        return(
            <ListWrapper>
                {/*<Detils/>*/}
                {PageList}
            </ListWrapper>
        )
    }
}
const mapState = ( state ) => ({
    list:state.getIn(['home','List']),
});
export default connect(mapState,null)(List);