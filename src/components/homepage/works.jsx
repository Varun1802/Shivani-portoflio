import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../common/card";

import "./styles/works.css";


const Works = () => {
	return (
		<div className="works">
			<Link to="/book">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body flex justify-center items-center">				
						<div class="demo">
						  <div class="box">
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="hover-point"></div>
						    <div class="box-contents"></div>
						  </div>
						</div>	
					</div>
				}
			/>
			</Link>
		</div>
	);
};

export default Works;
