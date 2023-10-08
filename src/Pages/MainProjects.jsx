import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TopNav from "../Components/TopNav";
import Projects from "../Components/Projects";

export default function MainProjects () {
    const [active] = useState('projects');
    const [title] = useState('Things I’ve put my dent in the universe.');
    const [description] = useState('I have worked on a variety of projects over the years and I am proud of the progress I have made. Many of these projects are open-source and available for others to explore and contribute to. If you are interested in any of the projects I have worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I am always open to new ideas and feedback.');
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
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <Projects />   
        </div>
    );
}