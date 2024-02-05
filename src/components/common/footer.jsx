import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer flex flex-col md:flex-row">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text mt-2 md:mt-0">
						© 2024 Shivani Sibal All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
