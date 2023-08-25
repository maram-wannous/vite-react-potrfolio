import {  useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import homeimg from '../assets/homeimg.jpg'
import INFO from '../data/user'
import './style.css'
import Projects from "../Components/Projects";


export default function Home () {
    const homeimage = homeimg;
    const [id] = useState('home');
    const [active] = useState('home');
    const [titleAnimation] = useState(['Front-end','React','Developer']);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <div className="home">
            <Nav active={active} />
            <TopNav/>
            <Banner title={INFO.homepage.title} 
					titleAnimation={titleAnimation} 
					desc={INFO.homepage.description} 
					id={id} 
					imag={homeimage}
			/>
			<Projects />

        </div>
    );
}