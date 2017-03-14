import React, { PropTypes } from 'react'
import classnames from 'classnames'
import styles from './styles.scss'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const Title = props => {
    const {title} = props;
    return(
        <div className={styles.header}>
            <MuiThemeProvider>
                <AppBar title={title} iconElementLeft={
                    <IconButton>
                    <i className="iconfont" dangerouslySetInnerHTML={{__html: '&#xe611;'}}></i>

                </IconButton>} onLeftIconButtonTouchTap={()=>{window.history.go(-1)}}/>
            </MuiThemeProvider>
        </div>

    )
}

export default Title