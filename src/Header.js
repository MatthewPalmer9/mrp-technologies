import React, { Component } from 'react';
import resume from './mrp-resume.doc';

export default class Header extends Component {
    render() {
        return (
            <header className="text-gray-700 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                <a href="https://matthewpalmer9.github.io/" className="mr-5 hover:text-gray-900">Blog</a>
                <a href="https://github.com/MatthewPalmer9" className="mr-5 hover:text-gray-900">Github</a>
                <a className="hover:text-gray-900">Projects</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}
                <span className="nowrap ml-3 text-xl">MRP | Technologies</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <a href={resume} className="resumeBtn inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" download>
                Resume&nbsp;<i className="fas fa-download"></i>
                </a>
                </div>
            </div>
            </header>
        )
    }
}