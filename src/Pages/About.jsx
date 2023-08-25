import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TopNav from "../Components/TopNav";
import Banner from "../Components/Banner";
import Info from '../data/user'
import Socials from "../Components/Socials";
import './style.css'

export default function About () {
    const [active] = useState('about');
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <div>
            <Nav active={active} />
            <TopNav/>
            <Banner title={Info.about.title} desc={Info.about.description} titleAnimation={''} id={''}/>
			<Socials />
        </div>
    );
}