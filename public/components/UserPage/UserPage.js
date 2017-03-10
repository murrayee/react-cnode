
import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux"
class UserPage extends React.Component{
    constructor(){
        super();
        this.displayName="UserPage";
        this.state={
        }
    }
    render(){
        return (
            <div>
                用户中心
            </div>
        )
    }
}
export default  connect()(UserPage)