
import React, { Component, PropTypes } from "react";
import {render} from "react-dom";
import Title from "../Common/Title/Title";
import {todoAction} from "../../actions/actions"
import {connect} from "react-redux"
class Message extends React.Component {
    constructor() {
        super();
        this.displayName = "Message";
        this.title = "消息中心";
    }
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        const {value, add}=this.props;
        return (
            <div>
                <Title title='消息中心' showBack={true}/>
                {/*<input type="text" value={value}/>*/}
                {/*<input type="button" value="add" onClick={add}/>*/}
                <p style={{width:"100%",height:"200px",textAlign:"center",lineHeight:"200px "}}>请先登录！！！</p>
            </div>
        )
    }
}
Message.propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
};
//遍历redux的state到组件的props
function mapStateToProps(state) {
    return {
        value: state.message.count
    }
}
//遍历redux的action到组件的props
function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(todoAction)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message)