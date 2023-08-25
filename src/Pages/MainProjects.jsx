import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TopNav from "../Components/TopNav";
import Projects from "../Components/Projects";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
            <div className="main-projects">
                <TopNav/>
                <div className="mian-projects-text">
                    <div className="container content">
                        <motion.h1 variants={fadeIn('up', 0.3)} 
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.7}}
                        >
                            {title}
                        </motion.h1>
                        <motion.p variants={fadeIn('up', 0.4)} 
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.7}}
                        >
                            {description}
                        </motion.p>
                    </div>
                </div>
            </div>
            <Projects />
            
        </div>
    );
}