import React, {  Component } from 'react';
import { connect } from 'react-redux';
import  {
    ListWrapper,
    ListItem,
    ListLeft,
    ListRight
} from '../style'
class List  extends  Component{
    render(){
        const { list } = this.props;
        const PageList = [];
        PageList.push(
                list.map((item) => (
                <ListItem key={item.get('id')}>
                    <ListLeft>
                        <h3 className='title'>{ item.get('title') }</h3>
                        <h3 className='receipts'>实收:{ item.get('receipts') }</h3>
                        <p className='receivable'>毛利:{item.get('gross')}</p>
                    </ListLeft>
                    <ListRight>
                        <p className='quantity'> 1罐</p>
                        <p className='receivable'>应收: { item.get('receivable') }</p>
                    </ListRight>
                </ListItem>
            ))
        )
        // for ( let i=0; i<10; i++ ){
        //
        // }
        return(
            <ListWrapper>
                {PageList}
            </ListWrapper>
        )
    }
}
const mapState = ( state ) => ({
    list:state.getIn(['home','topickList']),
});
export default connect(mapState,null)(List);