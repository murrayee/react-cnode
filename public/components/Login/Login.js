import React from "react";
import {render} from "react-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import {connect} from "react-redux";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Login";
    }

    render() {
        return (
            <div>
                登录界面
            </div>
        )
    }
}
export default connect()(Login)