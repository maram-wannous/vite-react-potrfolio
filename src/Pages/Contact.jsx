/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TopNav from "../Components/TopNav";
import Socials from '../Components/Socials'
import INFO from '../data/user'
import './style.css'

export default function Contact () {
    const [active] = useState('contact');
    const [title] = useState('Lets Get in Touch: Ways to Connect with Me');

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
    
    return (
        <div>
            <Nav active={active} />
			<TopNav/>
            <div className="main-projects">
				<div className="container">
                    <div className="content">
						<h1>
							{title}
						</h1>
						<p>
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials[2].url}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials[2].url}
							</a>
						</p>
					</div>
				</div>
            </div>
            <Socials/>
        </div>
    );
}