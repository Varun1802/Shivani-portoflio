import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body flex justify-center items-center">
						<a href="https://www.amazon.com/gp/product/9354227570/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=9354227570&SubscriptionId=1MGPYB6YW3HWK55XCGG2" target="_blank">
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
						</a>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
