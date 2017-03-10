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
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Content";
    }

    render() {
        const {article}=this.props;
        return (
            <div>
                {/*<img  src={article.author.avatar_url} alt={article.author.loginname}/>*/}
                {/*<div style={{width:"100%"}} dangerouslySetInnerHTML={{__html: article.content}}></div>*/}

                <MuiThemeProvider>
                    <List>
                        <div style={{margin:'-8px 0'}}>
                            <ListItem>
                                <div style={{margin:-16}}>
                                    <div className={styles.head}>
                                        <div className={styles.imgbox}>
                                            <img src={article.author.avatar_url} alt={article.author.loginname}/>
                                        </div>
                                        <div className={styles.info}>
                                            <span>{article.author.loginname}</span>
                                            <span style={{float:'right'}}>发表于{transformDate(article.create_at)}</span>
                                        </div>
                                    </div>

                                </div>
                            </ListItem>
                            <ListItem>
                                <div className={styles.title}>{article.title}</div>
                            </ListItem>
                            <Divider/>
                            <ListItem style={{lineHeight:'auto'}}>
                                <div style={{margin:-16}}>
                                    <div className={`${styles.main} markdown-body`} dangerouslySetInnerHTML={{__html: article.content}}></div>
                                </div>
                            </ListItem>
                        </div>
                    </List>

                </MuiThemeProvider>
            </div>
        )
    }
}
export default Content