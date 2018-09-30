import React, {  Component } from 'react';
import {
    TimeWrapper,
    TimeRight,
    TimeLeft,
    TimeAuto,
    Button,
    Timezhi
} from '../style'
class Time  extends  Component{
    constructor (){
        super();
        this.state = {
            date : new Date(Date.now())
        };
    }
    render(){
        return(
            <TimeWrapper>
               <TimeLeft>
                   1902-03-06
               </TimeLeft>
                <Timezhi>
                    至
                </Timezhi>
                <TimeAuto>
                    1902-03-08
                </TimeAuto>
                <TimeRight>
                    <Button className='screen'>筛选</Button>
                </TimeRight>
            </TimeWrapper>
        )
    }
}
export default Time;

