import React, { Component } from 'react';
import resume from './mrp-resume.doc'

export default class Banner extends Component {
    render () {
        return(
            <div className="banner-container">
                <div className="brand"><span className="head">Matthew Palmer</span>  <span className="subhead"><em>A passionate UX/UI Developer who specializes in JavaScript / React.js </em></span></div>
                <div className="download">
                    <div className="dl-btn">
                        <a href={resume} download>Resume <i className="fas fa-download"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}