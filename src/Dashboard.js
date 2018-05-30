import React, {Component} from "react";
import './Dashboard.css';
import Panel_options from './Panel_option';
import { Link } from "react-router-dom";
import Panel_data from "./Panel_data";
import cookie from 'react-cookies';

class Dashboard extends Component {

    constructor(props){
        super(props);
        if(cookie.load('token')===undefined){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="mainn-container clearfix height">
                <div className="Roww clearfix">
                    <Panel_options/>
                    <Panel_data history={this.props.history} />
                </div>
            </div>

        );
    }
}

export default Dashboard;