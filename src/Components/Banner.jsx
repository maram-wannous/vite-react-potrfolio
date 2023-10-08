/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import './banner.css'
import {TypeAnimation} from 'react-type-animation'
import homeimg from '../assets/homeimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import INFO from '../data/user'

export default function Banner({title, titleAnimation, desc, id}){
    const imag = homeimg;

    return (
        <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-text">
                            <div className='banner-text-title' data-aos="fade-up">
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
                            </div>
                            <p data-aos="fade-up" data-aos-delay="200">
                                {desc}
                            </p>
                            <div className= {id==='home' ? '' : 'hide-homepage-socials'} data-aos="fade-up" data-aos-delay="300">
							        {INFO.socials.map((social, index)=>(
                                        <a key={index} href={social.url}>
                                            <FontAwesomeIcon
                                                icon={social.iconName}
                                                className="homepage-social-icon"
                                            />
                                        </a>
							        ))}
			                </div>
                        </div>
                        <div className="banner-img" data-aos="zoom-in">
                            <img src={imag} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    );
}