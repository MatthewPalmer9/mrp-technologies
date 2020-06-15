import React, { Component } from 'react';
import profile from './profile.jpg'


export default class Profile extends Component {
    render() {
        return(
            <div>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="profilePic lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={profile}></img>
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Full Stack Web Application Developer</h1>
                    <p className="mb-8 leading-relaxed">Hello Recruiters and Hiring Managers! I know you're very busy, <span className="highlighter">so here's everything you need to know about me in a couple short sentences!</span> I have experience with Front End and Back End API technologies with a rebust specialization in the Ruby and JavaScript programming languages. I am passionate about learning and sharpening the skills that help make your company special! </p>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}