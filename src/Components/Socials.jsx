import './social.css'
import INFO from "../data/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function Socials(){
    return (
        <motion.div variants={fadeIn('up', 0.3)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className="container socials"
        >
			<div className="social">
				<a href={INFO.socials.facebook} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faFacebook}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Facebook</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Instagram</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</motion.div>
    );
}