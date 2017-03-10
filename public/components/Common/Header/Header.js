/**
 * Created by Administrator on 2017/2/16.
 */

import React from "react";
import {render} from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs'
import {Link} from 'react-router'
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconButton from 'material-ui/IconButton';
import SwipeableViews from 'react-swipeable-views';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Header";
        this.state = {
            slideIndex: 0,
        };
        this.handleChange = (value) => {
            // console.log(this.props);
            this.setState({
                slideIndex: value,
            });
            this.props.onClick(this.props.tabs[value].filter)
        };
    }
    componentWillMount(){
        const {tabs,filter} = this.props;
        let slideIndex;
        tabs.forEach((tab,index) => {
            if(tab.filter === filter){
                slideIndex = index;
            }
        });
        this.setState({
            slideIndex: slideIndex
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div style={{position:"fixed",top:'0',width:"100%",zIndex:"999"}}>
                        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                            {this.props.tabs.map((tab, i) =>
                                <Tab key={i} label={tab.title} value={i}>
                                </Tab>
                            )}
                        </Tabs>
                    </div>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                        {this.props.children}
                    </SwipeableViews>
                </div>

            </MuiThemeProvider>
        )
    }
}
export default  Header