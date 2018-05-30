import React, { Component } from "react";
import './Panel_options.css';


class Panel_options extends Component{
    render(){
        return(
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
        );
    }
}

export default Panel_options;