import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {

	return (
		<>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{props.date}</div>
				</div>

				
					<div className="article-right-side">
						<a className="" href={props.links} target="_blank">
						<div className="article-title">{props.title}</div>
						<div className="article-description">{props.description}</div>
						<a className="article-link" href={props.links} target="_blank">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</a>
						</a>
					</div>
			
			</div>
		</>
	);
};

export default Article;
