import styled from 'styled-components';
export const HomeWrapper = styled.div`
    margin-top:45px;
`;
export const ListWrapper = styled.div`
    background:#ffffff;
`;
export const ListItem = styled.div`
    margin-top:10px;
    overflow: hidden;
    padding:3%;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    line-height:35px;
`;

export const ListLeft = styled.div`
    float:left;
    text-align:left;
    .receipts{
        color:#f00;
    }
    .receivable{
     color:#686868;
    }
`;
export const ListRight = styled.div`
    float:right; 
    text-align:right;
    .quantity{
        color:#686868;
    }
    .receivable{
        color:#686868;
    }
`;
//Time
export const TimeWrapper = styled.div`
     padding:3% 2%
    box-sizing:border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    width: 100%;
    background:#ffffff;
    font-size: 14px;
    overflow: hidden;
`;
export const TimeLeft = styled.div`
    width:30%;
    text-align: center;
    float:left;
    border:1px solid #777777;
    border-radius: 3px;
    line-height: 35px;
    color:#878787;
`;
export const TimeAuto = styled.div`
    width:30%;
    text-align: center;
    float:left;
    border-radius: 3px;
    border:1px solid #777777;
    line-height: 35px;
        color:#878787;
`;
export const Timezhi = styled.div`
    width:10%;
    text-align: center;
    line-height: 35px;
    float:left;
        color:#878787;
`;
export const TimeRight = styled.div`
    width:27%;
    float:left;
    text-align: center; 
`;
export const Button = styled.button`
    width: 80%;
    color: #f3930a;
    border: 1px solid #f3930a;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    background:#ffffff;
    line-height: 33px;
    border-radius: 3px;
`;

//登录
export const LoginWrapper = styled.div`
    & img{
        width:100%;
    }
    & input{
        width: 100%;
        margin-top: 10%;
        line-height: 40px;
        box-sizing: border-box;
        border-radius: 3px;
        background: none;
        border-bottom: 1px solid #6e6e6e;
        border: none;
    }
    & .am-button{
        margin-top:8%;
        background:#574ec5;
        border:none;
        color:#ffffff;
    }
    & .am-button.am-button-active{
         background:#574ec5d1;
    }
    & ul li{
        border-bottom:1px solid #ccc;
    }
`;
export const LoginFrom = styled.div`
    padding: 5% 10% 10% 10%;
    margin:0 auto;
    & .am-flexbox{
        margin-top:8%;
    }
    & .ina .am-flexbox-item a{
        color:#3d3d3d;
    }
    & .shuom{
        color:#a7a7a7;
    }
`;
