//styled-components 只引用自己需要的样式
import  styled  from 'styled-components';
// import logopic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
   .header{
         background: #5c56e2;
   }
   .left{
        color:#ffffff;
        text-align: left;
         padding-left:2%;
         width: 70%;
         float: left;
   }
   .right{
        color:#ffffff;
        text-align: right;
        padding-right:3%;
        width: 25%;
        float: left;
   }
`;
export const NavBar = styled.div`
    height:45px;
    line-height:45px;
`;
export const Site = styled.span`
    color:#ffffff;
`;
export const LogName = styled.span`
    color:#ffffff;
    font-weight: bold;
`;
export const List = styled.div`
    
`;
