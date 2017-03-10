/**
 * Created by Administrator on 2017/3/8.
 */
import React from "react";
import {render} from "react-dom";
import {List,ListItem} from 'material-ui/List'
import styles from './styles.scss'
import Divider from 'material-ui/Divider'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import prefix from '../../utils/routePrefix'
import transformDate from '../../utils/transformDate'
class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Reply";
    }

    render() {
        const {replies}=this.props;
        return (
            <div  className={styles.reply}>
                <MuiThemeProvider>
                    <List>
                        <ListItem>
                            <div style={{margin:-16}}>
                                <h2>共有{replies.length}条回复</h2>
                            </div>
                        </ListItem>
                        {replies.map((reply,index) => (
                            <div key={index}>
                                <ListItem>
                                    <div className={styles.author}>
                                        <img src={reply.author.avatar_url} alt={reply.author.loginname}/>
                                        <div style={{textAlign:'center',paddingTop:10}}>{index+1}楼</div>
                                    </div>
                                    <div className={styles.main}>
                                        <div className={styles.item}>
                                                {reply.author.loginname}
                                            <span style={{float:'right'}}>{transformDate(reply.create_at)}</span>
                                        </div>
                                        <div className={`${styles.item} markdown-text`} dangerouslySetInnerHTML={{__html: reply.content}} style={{lineHeight:'21px'}}></div>
                                        <div className={styles.item}>
                                            <div style={{float:'right'}}>
			      								<span>回复</span>
                                            </div>
                                        </div>
                                    </div>
                                </ListItem>
                                <Divider/>
                            </div>
                        ))}
                    </List>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Reply