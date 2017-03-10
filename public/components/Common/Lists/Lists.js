import React from "react";
import {render} from "react-dom";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router'
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem'
import SwipeableViews from 'react-swipeable-views';
import prefix from '../../../utils/routePrefix';

const styles={
    link:{
        display:"block",
        textDecoration:"none"
    }
};
const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);
const Lists =props =>{
    const tabChn ={all:'全部',good:'精华',share:'分享',ask:'问答',job:'招聘'};
    const {topics,dispatch,fetchArticle,article} = props;
    return (
        <SwipeableViews>
            <List style={{marginTop:"50px",marginBottom:"40px"}}>

                {topics.map((topic,i) =>
                    <Link key={i} to={`${prefix}/Article/${topic.id}`} style={styles.link}
                          onClick={() => {
                              if(!article[topic.id]){
                                  dispatch(fetchArticle(topic.id))
                              }else if(article.currentTopicId !== topic.id){
                                  dispatch(fetchArticle(topic.id,false))
                              }
                          }}>
                        <ListItem
                            leftAvatar={<Avatar src={topic.author.avatar_url}/>}
                            primaryText={
                                topic.title
                            }
                            secondaryText={
                                <p>
                                    <span>{topic.reply_count+'/'+topic.visit_count}</span>
                                    <span>{tabChn[topic.tab]}</span>
                                    <span style={{float:'right'}}>{topic.create_at}</span>
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true}/>
                    </Link>

                )}
            </List>
        </SwipeableViews>
    )
}
export default  Lists