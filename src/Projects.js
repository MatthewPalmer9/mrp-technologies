import React, { Component } from 'react';
import ComingSoon from './ComingSoon.jpg';
import TheGentleman from './thegentleman.jpg';
import Bowlicious from './bowlicious.png';
import RgbGuess from './rgbguess.png';
import JSSlider from './js-slider.png';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <section className="showcase text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-base">Below, you'll find a showcase for some of my most proudly developed projects. A cocktail of UI/UX, landing pages and deeper projects utilizing technologies focused on swift development, responsive design and use of back end APIs for information storage.</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="projectBox bg-gray-100 p-6 rounded-lg">
                                <a target="_blank" rel="noopener noreferrer" href="https://bowliciousbowtique.vercel.app/"><img className="h-40 rounded w-full object-cover object-center mb-6" src={Bowlicious} alt="content"></img></a>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">eCommerce</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4"><a target="_blank" rel="noopener noreferrer" href="https://bowliciousbowtique.vercel.app/">Bowlicious Bowtique</a></h2>
                                <p className="leading-relaxed text-base">Created with React/Redux using Ruby on Rails as a backend API.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="projectBox bg-gray-100 p-6 rounded-lg">
                                <a target="_blank" rel="noopener noreferrer" href="https://rgbcolorgame.vercel.app/"><img className="h-40 rounded w-full object-cover object-center mb-6" src={RgbGuess} alt="content"></img></a>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Games</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4"><a target="_blank" rel="noopener noreferrer" href="https://rgbcolorgame.vercel.app/">RGB Guessing Game</a></h2>
                                <p className="leading-relaxed text-base">An RGB color guessing game written in React</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="projectBox bg-gray-100 p-6 rounded-lg">
                                <a target="_blank" rel="noopener noreferrer" href="https://the-gentleman.vercel.app/"><img className="h-40 rounded w-full object-cover object-center mb-6" src={TheGentleman} alt="content"></img></a>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">LANDING PAGE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4"><a target="_blank" rel="noopener noreferrer" href="https://the-gentleman.vercel.app/">The Gentleman</a></h2>
                                <p className="leading-relaxed text-base"><em>Created by gentlemen, for gentleman.</em> A static front end React UI landing page.</p>
                            </div>
                        </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="projectBox bg-gray-100 p-6 rounded-lg">
                                    <a target="_blank" rel="noopener noreferrer" href="https://mrp-carousel.vercel.app/"><img className="h-40 rounded w-full object-cover object-center mb-6" src={JSSlider} alt="content"></img></a>
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">UI/UX</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4"><a target="_blank" rel="noopener noreferrer" href="https://mrp-carousel.vercel.app/">Image Slider / Carousel</a></h2>
                                    <p className="leading-relaxed text-base">An image slider made in 100%, good 'ol HTML, CSS, and JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}