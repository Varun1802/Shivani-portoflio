import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
	
			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
				<div className="about-logo-container invisible md:visible">
						<div className="about-logo mt-4">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="flex flex-col md:flex-row">
							<div>
						<div className="title articles-title">
							<p className="text-4xl">{INFO.articles.title}</p>
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>
						</div>
						{/*BOOK ANIMATION DIV*/}
						<div className="book max-w-[600px] md:max-h-[100px]">
						<div class="scene max-h-[470px] ">
  							  <div class="book-wrap">
  							    <div class="left-side">
  							      <div class="book-cover-left"></div>
  							      <div class="layer1">
  							        <div class="page-left"></div>
  							      </div>
  							      <div class="layer2">
  							        <div class="page-left"></div>
  							      </div>
  							      <div class="layer3">
  							        <div class="page-left"></div>
  							      </div>
  							      <div class="layer4">
  							        <div class="page-left"></div>
  							      </div>
  							      <div class="layer-text">
  							        <div class="page-left-2">
  							          <div class="corner"></div>
  							          <div class="corner2"></div>
  							          <div class="corner-fold"></div>
  							          <div class="page-text w-richtext ">
  							            <h3><strong>June 2016</strong></h3>
  							            <h6>BY <a href="" target="_blank">Shivani Sibal</a></h6>
										  <p className="left--text visible md:hidden" style={{"font-size":"12px"}}>THE LAST OF the bags packed, Parul and Aahan Sikand were ready to leave 							their family home for the final time.....
										  </p>
  							            <p className="left--text invisible md:visible">THE LAST OF the bags packed, Parul and Aahan Sikand were ready to leave 							their family home for the final time.Acquired in 1946, Sikand House was intended to be the 							cradle for many grandsons and great-grandsons in the coming years. Displaced as he was at 							Partition, Rai Bahadur Manohar Krishna Sikand, Aahan's grandfather, a largely self-made man</p>
  							          </div>
  							        </div>
  							      </div>
  							    </div>
  							    <div class="center"></div>
  							    <div class="right-side">
  							      <div class="book-cover-right"></div>
  							      <div class="layer1">
  							        <div class="page-right"></div>
  							      </div>
  							      <div class="layer2 right">
  							        <div class="page-right"></div>
  							      </div>
  							      <div class="layer3 right">
  							        <div class="page-right"></div>
  							      </div>
  							      <div class="layer4 right">
  							        <div class="page-right"></div>
  							      </div>
  							      <div class="layer-text right">
  							        <div class="page-right-2">
									  <p className="left--text visible md:hidden py-6 px-2" style={{"font-size":"12px"}}>Acquired in 1946, Sikand House was intended to be the cradle for many grandsons and great-grandsons in the coming years.
										  </p>
  							          <div class="page-text w-richtext invisible md:visible">
  							            <p >  with a premonition about difficult times ahead, didn't suffer the life of a refugee, 							having swapped his house with that of an equally astute Muslim acquaintance before all the 							madness began. It was a gentleman's agreement.</p>
										  <p>The Rai Bahadur arrived in Delhi by air, with gold coins sewn into the lining of his and 							his wife's coats. Their worthy possessions had followed by road, including the heavy teak 							furniture and cast- iron cooking ...</p>


							
  							          </div>
  							        </div>
  							      </div>
  							    </div>
  							  </div>
  							</div>

						</div>
						</div>

						<div className="articles-container md:mt-28">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article.date}
											title={article.title}
											description={article.description}
											links={article.links}
										/>
									
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
