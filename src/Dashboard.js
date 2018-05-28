import React, {Component} from "react";
import './Dashboard.css';
import Panel_options from './Panel_option';
import { Link } from "react-router-dom";
import Panel_data from "./Panel_data";

class Dashboard extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="mainn-container clearfix height">
                <div className="Roww clearfix">
                    <Panel_options/>
                    <Panel_data/>
                </div>
            </div>

        );
    }
}

export default Dashboard;