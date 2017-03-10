/**
 * Created by Administrator on 2017/2/20.
 */
import React from "react";
import {render} from "react-dom";
import Footer from "../components/Common/Footer/Footer";
import {connect} from "react-redux"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "App";
    }

    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
                <Footer  style={{bottom: "0", position: "fixed", width: "100%", border: "1px solid #F5f5f5"}}/>
            </div>
        )
    }
}
export default  connect()(App)