import React, { Component } from 'react';
import profile from './profile.jpg'


export default class Picture extends Component {
    render() {
        return(
            <div className="profile">
                <img className="profile-pic" src={profile} />
            </div>
        )
    }
}