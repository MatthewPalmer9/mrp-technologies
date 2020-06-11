import React, { Component } from 'react';
import resume from './mrp-resume.doc'

export default class Banner extends Component {
    render () {
        return(
            <div className="banner-container">
                <div className="brand">MRP | Technologies</div>
                <div className="download">
                    <a href={resume} download>Resume <i className="fas fa-download"></i></a>
                </div>
            </div>
        )
    }
}