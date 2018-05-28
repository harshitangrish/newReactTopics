import React, { Component } from "react";
import './Panel_data.css';

class Panel_data extends Component{
    render(){
        return(
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
        );
    }
}

export default Panel_data;