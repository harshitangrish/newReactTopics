import React, {Component} from "react";
import './Dashboard.css';
import { Link } from "react-router-dom";

class Dashboard extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="mainn-container clearfix height">
                <div className="Roww clearfix">
                    <div className="panel-option-container height">
                        <div className="roww clearfix">
                            <div className="top-bar blue clearfix"/>
                        </div>
                        <div className="roww clearfix">
                            <div className="options-container clearfix">
                                <div className="roww clearfix">
                                    <div className="avatar-container">
                                        <div className="avatar height clearfix"/>
                                    </div>
                                </div>
                                <div className="roww clearfix">
                                    <div className="user-detail-container clearfix">
                                        <h4>user name</h4>
                                    </div>
                                </div>
                                <div className="roww clearfix">
                                    <div className="option clearfix">
                                        <div className="image"/>
                                        <div className="text">
                                            <span>Dashboard</span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imagetwo"/>
                                        <div className="text">
                                            <span>active users</span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imagethree"/>
                                        <div className="text">
                                            <span>total users</span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imagefour"/>
                                        <div className="text">
                                            <span>orders</span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imagefive"/>
                                        <div className="text">
                                            <span>monthly progress
                                            </span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imagesix"/>
                                        <div className="text">
                                            <span>offers</span>
                                        </div>
                                    </div>
                                    <div className="option clearfix">
                                        <div className="imageseven"/>
                                        <div className="text">
                                            <span>transactions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-data-container">
                        <div className="roww clearfix">
                            <div className="top-bar navy clearfix"/>
                        </div>
                        <div className="Roww clearfix margin" >
                        <div className="boxxx light-blue" ></div>
                        <div className="boxxx blue-light" ></div>
                        <div className="boxxx dark-blue" ></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;