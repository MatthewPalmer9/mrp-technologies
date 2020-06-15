import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return(
            <section className="skills text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">SKILLS</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Take a peek at what skills I can offer your company!</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i className="html fab fa-html5"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">HTML</h2>
                    <p className="leading-relaxed text-base">HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.</p>
                    <a href="https://www.w3schools.com/html/html_summary.asp#:~:text=HTML%20is%20the%20universal%20markup,browser%20can%20read%20and%20display."className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i class="css fab fa-css3-alt"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">CSS</h2>
                    <p className="leading-relaxed text-base">CSS stands for Cascading Style Sheets. It is a language designed to specify the overall appearance of webpages as well as the appearance and structure of the text and elements such as images and buttons on webpages and their layout.</p>
                    <a href="http://www.landofcode.com/css-tutorials/css-summary.php#:~:text=CSS%20summary,on%20webpages%20and%20their%20layout." className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i class="javascript fab fa-js-square"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">JavaScript</h2>
                    <p className="leading-relaxed text-base">JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.</p>
                    <a href="https://www.tutorialspoint.com/javascript/javascript_overview.htm#:~:text=JavaScript%20is%20a%20dynamic%20computer,language%20with%20object%2Doriented%20capabilities." className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i class="ruby fas fa-gem"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Ruby / Ruby on Rails </h2>
                    <p className="leading-relaxed text-base">Ruby is a general-purpose, interpreted programming language as well as a true object-oriented programming language. It is also a server-side scripting language similar to Python and PERL. Ruby can be used to write Common Gateway Interface (CGI) scripts / Back End APIs.</p>
                    <a href="https://www.tutorialspoint.com/ruby/ruby_overview.htm#:~:text=Features%20of%20Ruby&text=Ruby%20is%20a%20general%2Dpurpose,Gateway%20Interface%20(CGI)%20scripts." className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i class="react fab fa-react"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">React </h2>
                    <p className="leading-relaxed text-base">React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.</p>
                    <a href="https://www.tutorialspoint.com/ruby/ruby_overview.htm#:~:text=Features%20of%20Ruby&text=Ruby%20is%20a%20general%2Dpurpose,Gateway%20Interface%20(CGI)%20scripts." className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                    <i class="coffee fas fa-coffee"></i>
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Coffee... Wait, Coffee?</h2>
                    <p className="leading-relaxed text-base">Okay, coffee isn't a skill. You got me... But at least 9000 cups certainly helped get me here! <i class="smile fas fa-smile-wink"></i></p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        )
    }
}