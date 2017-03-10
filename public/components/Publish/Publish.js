/**
 * Created by Administrator on 2017/2/20.
 */
import React from "react";
import {render} from "react-dom";
import Title from "../Common/Title/Title"
import {connect} from "react-redux";

class Publish extends React.Component{
    constructor(props){
        super(props);
        this.displayName="Publish";
        this.title="新增文章";
    }
    render(){
        const{publish}=this.props;
        return (
            <div>
                <Title title='分享' showBack={true}/>
                {/*<input type="text" value={value}/>*/}
                {/*<input type="button" value="add" onClick={add}/>*/}
                <p style={{width:"100%",height:"200px",textAlign:"center",lineHeight:"200px "}}>请先登录！！！</p>

            </div>
        )
    }
}
export default connect()(Publish)