import React from "react";
import {render} from "react-dom";
import {Link, hashHistory} from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import prefix from '../../../utils/routePrefix';
const nearbyIcon = <IconLocationOn />;
const actionHome = <ActionHome />;
const actionFlightTakeoff = <ActionFlightTakeoff />;
const fileCloudDownload = <FileCloudDownload />;
const hardwareVideogameAsset = <HardwareVideogameAsset />;
const styles = {
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50,
        border: "1px solid rgb(0, 188, 212)",
        position: "absolute",
        top: -25,
        zIndex: 666,
        padding: 5

    },
    slide: {
        padding: 10,
    },
    link: {
        display: "block",
        textDecoration: "none"
    }
};
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Footer";
        this.state = {
            selectedIndex: 0,
        };
        this.hashs = {
            0: "/HomePage",
            1: "/Message",
            2: "/Publish",
            3: "/UserPage"
        };
        this.select = (index) => {
            this.setState({selectedIndex: index});
            hashHistory.push(this.hashs[index]);
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper style={{bottom: "0", position: "fixed", width: "100%", border: "1px solid #F5f5f5"}} zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>

                            <BottomNavigationItem
                                label="文章"
                                icon={actionHome}
                                onTouchTap={() => this.select(0)}
                            />
                            <BottomNavigationItem
                                label="消息"
                                icon={actionFlightTakeoff}
                                onTouchTap={() => this.select(1)}
                            />
                            <BottomNavigationItem
                                label="发表"
                                icon={fileCloudDownload}
                                onTouchTap={() => this.select(2)}
                            />
                            <BottomNavigationItem
                                label="我的"
                                icon={hardwareVideogameAsset}
                                onTouchTap={() => this.select(3) }
                            />
                    </BottomNavigation>
                </Paper>
            </MuiThemeProvider>
        )
    }
}
export default  Footer