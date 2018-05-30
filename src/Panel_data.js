import React, {Component} from "react";
import './Panel_data.css';
import cookie from 'react-cookies';

class Panel_data extends Component {
    constructor(props){
        super(props);
    }

    logout = () => {
        cookie.remove('token');
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="panel-data-container">
                <div className="roww clearfix">
                    <div className="top-bar navy clearfix">
                        <button onClick={this.logout} >Logout</button>
                    </div>
                </div>
                <div className="Roww clearfix margin">
                    <div className="boxxx light-blue"></div>
                    <div className="boxxx blue-light"></div>
                    <div className="boxxx dark-blue"></div>
                </div>
            </div>
        );
    }
}

export default Panel_data;