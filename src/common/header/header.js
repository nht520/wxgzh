import React,{Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
//
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Flex } from 'antd-mobile';
import {
    HeaderWrapper,
    NavBar,
    Site,
    LogName,
} from './style';
//无状态组件
class Header extends Component{
    render(){
        const { list } = this.props;
        const newList=list.toJS();
        return(
            <HeaderWrapper>
                <NavBar className='header'
                        mode="light">
                    <Flex.Item className='left'>
                        <i className="iconfont"> &#xe61c; </i>
                        <Site>{newList.title}</Site>-<LogName>{newList.site}</LogName>
                    </Flex.Item>
                    <Flex.Item className='right'>
                        退出
                    </Flex.Item>
                </NavBar>
            </HeaderWrapper>
        )
    }
    componentDidMount() {
        this.props.handinputseach()
    }
}
const mapState = ( state ) => {
    return{
        list:state.getIn(['header','ListItem']),
    }
}
const MapDispatch = ( dispatch ) => {
    return{
        handinputseach () {
             dispatch(actionCreators.getList());
        },
    }
}
export default connect( mapState,MapDispatch )(Header);