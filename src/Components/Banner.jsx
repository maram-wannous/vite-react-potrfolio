/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import './banner.css'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import homeimg from '../assets/homeimg.jpg'
import { fadeIn } from '../variants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import INFO from '../data/user'

export default function Banner({title, titleAnimation, desc, id}){
    const imag = homeimg;

    return (
        <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-text">
                            <motion.div  variants={fadeIn('up', 0.3)} 
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.7}}
                                    className='banner-text-title'>
                                <h1>
                                        {title} 
                                </h1>
                                <TypeAnimation sequence={[
                                    titleAnimation[0], 2000,
                                    titleAnimation[1], 2000,
                                    titleAnimation[2], 2000,
                                    ]}
                                    speed={50}
                                    wrapper="span"
                                    repeat={Infinity}
                                    style={{color: '#b936ee'}}
                                    className= {id==='home' ? 'title-animation' : 'hide-type-animation'}
                                />
                            </motion.div>
                            <motion.p variants={fadeIn('up', 0.4)} 
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.7}}
                            >
                                {desc}
                            </motion.p>
                            <motion.div variants={fadeIn('up', 0.5)} 
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{once: false, amount: 0.7}}
                                        className= {id==='home' ? '' : 'hide-homepage-socials'}
                            >
							        {INFO.socials.map((social, index)=>(
                                        <a key={index} href={social.url}>
                                            <FontAwesomeIcon
                                                icon={social.iconName}
                                                className="homepage-social-icon"
                                            />
                                        </a>
							        ))}
			                </motion.div>
                        </div>
                        <motion.div variants={fadeIn('down', 0.5)} 
                            initial='hidden'
                            whileInView={'show'}
                            className="banner-img">
                            <img src={imag} alt="" />
                        </motion.div>
                    </div>
                </div>
            </section>
    );
}