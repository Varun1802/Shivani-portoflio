import React from 'react'
import NavBar from '../components/common/navBar'
import Footer from '../components/common/footer'
import Logo from "../components/common/logo";
import equation from "../components/homepage/equation.jpg"
import "./styles/book.css";
import { Star } from 'lucide-react';

function Book() {
  return (
    <>
    	<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="contact-logo-container invisible md:visible">
						<div className="contact-logo mt-4">
							<Logo width={46} />
						</div>
					</div>

                    
					<div className="contact-container">
                        <div className='flex flex-col md:flex-row justify-center items-center md:py-16'>
						    <div className="equation-image md:w-1/3 mb-4">
						    	<img src={equation} alt='Equation image' />
						    </div>
                            <div className='flex flex-col w-2/3 justify-center  md:items-start'>
                                <div className="title-book text-4xl md:text-8xl font-bold">
						        	<h1>EQUATIONS</h1>
						        </div>
                                <div className="author text-xl mb-4">
						        	<h2>Author: Shivani Sibal</h2>
						        </div>
                                <div className="about-book text-md">
                                In a city like Delhi, people of every class and creed work and live alongside one another, their lives overlapping but never truly meeting. Shivani Sibal delves into this complex intermingling through the stories of Rajesh and Aahan, whose lives are worlds apart and tightly intertwined. A story of class, power, and the shifting dynamics of modern India, Equations is an empathetic and multi-layered novel.
						        </div>
                                <div className='flex pt-8'>
                                    <h1 className='text-gray-600'>Ratings: </h1>
                                    <div className='flex '>
                                        <Star color='#dbca0f'/>
                                        <Star color='#dbca0f'/>
                                        <Star color='#dbca0f'/>
                                        <Star color='#dbca0f'/>
                                        <Star color='#7a7576'/>
                                        <h1 className='text-gray-500 px-2'>(150)</h1>
                                    </div>
                                </div>
                                <div className='buy-section py-4'>
                                    <a href='https://www.amazon.com/gp/product/9354227570/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=9354227570&SubscriptionId=1MGPYB6YW3HWK55XCGG2' target='_blank'>
                                    <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#14B8B6] to-[#14B8A6] rounded-lg" />
                                    <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-gray-700 hover:bg-transparent text-xl font-extrabold hover:text-white">
                                         Buy Now
                                    </div>
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
            </div>
    </>
  )
}

export default Book;
