import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { User,Mail,Pencil,Quote } from 'lucide-react';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { Resend } from 'resend';
import INFO from "../data/user";
import "./styles/contact.css";

const Contact = () => {

/*Resend Code here*/
const resend = new Resend("re_XM3zxNvi_9UKcGPfEkh6VyVsgNvnJve25");

const sendMail=( async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'sanjaykumarjat351728@gmail.com',
      to: ['sanjaykumarjat351728@gmail.com'],
      subject: 'Hello world',
      text: "TEst1",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
})
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={"Contact Shivani Sibal,Novelist"} />

			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container invisible md:visible">
						<div className="contact-logo mt-4">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container flex flex-col items-center h-screen">
						<div className="text-4xl md:text-7xl ">
							Let's Get in Touch:👋
							</div>
				<div className="md:w-1/2 self-center mx-4">
				<form action="" id="contact-form" className="flex flex-col gap-16 justify-between items-center ">
					  <div class="input flex gap-2 justify-between items-center w-full">
					    <User color="#14B8A6"/>
							<input type="text" name="name" id="name" placeholder="Name" class="h-10 shadow-md drop-shadow-sm indent-4 rounded-lg w-full"  required />
					  </div>

					  <div class="input flex gap-2 justify-center items-center w-full">
					    	<Mail color="#14B8A6"/>
							<input type="email" name="email" id="email" placeholder="Email" class="h-10 shadow-md drop-shadow-sm indent-4 rounded-lg w-full" required />
					  </div>

					  <div class="input flex gap-2 justify-center items-center w-full">
					    	<Pencil color="#14B8A6"/>
							<input type="text" name="subject" id="subject" placeholder="Subject" 			class="h-10  shadow-md drop-shadow-sm indent-4 rounded-lg w-full"  required /></div>
					  

					  <div class="input flex gap-2 justify-center w-full">
					    	<Quote color="#14B8A6"/>
							<textarea name="message" id="message"  rows={5} placeholder="Message..." class=" shadow-md drop-shadow-sm indent-4 rounded-lg w-full" required></textarea>	
					  </div>

					  <div class="input ">
					  <button className="p-[3px] relative w-full" onSubmit={sendMail}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14B8B6] to-[#14B8A6]" />
                            <div className="px-8 py-2  bg-white rounded-full  relative group transition duration-200 text-gray-700 hover:bg-transparent text-xl font-extrabold hover:text-white">
                                         Send Message
                            </div>
                        </button>
					  </div>
					</form>
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

export default Contact;
