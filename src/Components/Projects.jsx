import INFO from '../data/user';
import { fadeIn } from '../variants';
import Project from './Project'
import './projects.css'
import { motion } from 'framer-motion';

export default function Projects(){
    return (
        <div className="projects-section">
				<div className="container">
                    <div className='all-projects-container'>
                            <motion.div 
                                variants={fadeIn('right', 0.3)} 
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.7}}
                                className="left-projects">
                                <div className="projects-info">
                                    <h2>My previous work</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur.<br/>Beatae, consequatur?</p>
                                    <button className='btn'>work with me</button>
                                </div>
                                <div 
                                className="projects-img">
                                <Project
                                    title={INFO.projects[0].title}
                                    description={INFO.projects[0].description}
                                    linkText={INFO.projects[0].linkText}
                                    link={INFO.projects[0].link}
                                    projectImage= {INFO.projects[0].projectimage}
                                />
                                </div>
                            </motion.div>
                            <motion.div 
                                variants={fadeIn('left', 0.3)} 
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.7}}
                                className="right-projects">
                                <div className="projects-img">
                                    <Project
                                        title={INFO.projects[1].title}
                                        description={INFO.projects[1].description}
                                        linkText={INFO.projects[1].linkText}
                                        link={INFO.projects[1].link}
                                        projectImage= {INFO.projects[1].projectimage}
                                    />
                                </div>
                                <div className="projects-img">
                                    <Project
                                        title={INFO.projects[2].title}
                                        description={INFO.projects[2].description}
                                        linkText={INFO.projects[2].linkText}
                                        link={INFO.projects[2].link}
                                        projectImage= {INFO.projects[2].projectimage}
                                    />
                                </div>
                            </motion.div>
                    </div>
				</div>	
			</div>
    );
}