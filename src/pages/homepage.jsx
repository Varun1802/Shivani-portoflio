import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import Works from "../components/homepage/works";
import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={"Shivani Sibal"} />
	
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle} >
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
							              <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         
											<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
											<stop id="stop1" stop-color="rgba(18.379, 203.431, 37.605, 0.18)" offset="0%"></stop>                            
											<stop id="stop2" stop-color="rgba(91.732, 208.013, 158.572, 0.4)" offset="100%"></stop>                        
											</linearGradient>                    
											</defs>     
											
											<g mask="url(#mask0)">          
											<path fill="url(#sw-gradient)" d="M22.1,-23.5C30.2,-19.6,39.3,-14.1,41,-6.8C42.7,0.4,37.1,9.2,30.7,15.3C24.3,21.3,17.2,24.5,9.2,29.2C1.2,33.8,-7.7,39.8,-13.8,37.7C-19.8,35.5,-22.9,25.3,-27.7,16.3C-32.4,7.4,-38.8,-0.3,-38.5,-7.6C-38.1,-14.9,-31.2,-21.8,-23.6,-25.9C-16.1,-29.9,-8.1,-31.1,-0.5,-30.5C7,-29.9,14.1,-27.5,22.1,-23.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{"transition": "all 0.3s ease 0s;"}} stroke="url(#sw-gradient)">
											</path>   
											<image href="shivani.png" className="w-2/3" x='20' y='21.5'/>  
											
											</g> 
											</svg>
											

									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								<div className="flex flex-col gap-4 ml-4 md:ml-12">
							<iframe  height="250" src="https://www.youtube.com/embed/Oqq9Hs-dYhU?si=hLJF3O0BLik8kUHA" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="w-full md:w-[470px]"></iframe>
								
							<iframe  height="250" src="https://www.youtube.com/embed/LMI_q02ruxs?si=-h_4VtkWIzHveV_C" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="w-full md:w-[470px]"></iframe>
								</div>
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
