import React, { Component } from 'react';
import profile from './profile.jpg'


export default class Profile extends Component {
    render() {
        return(
            <div className="info-container">
                <div className="profile">
                    <img className="profile-pic animate fadeInLeft" src={profile} alt="profile-pic"/>
                </div>
                <div className="profile-skills"> 
                <p className="skill-head">SKILLS:</p>
                <p> <i className="fas fa-code"> :</i>
                        <i className="fab fa-html5 3x"></i> 
                        <i className="fab fa-css3-alt"></i>  
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-react"></i>
                </p>
                <p className="coffee-cup"><i className="fas fa-mug-hot"></i> : 965 Cups of Coffee... </p>
                </div>
            </div>
        )
    }
}