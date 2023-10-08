/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import './project.css'


export default function Project (props) {
    const { title, description, linkText, link, projectImage} = props;
    return (
        <div className="project">
				<div className="overlay"></div>
				<img src={projectImage} alt={title} />
				<Link to={link} target="blank">
					<div className="project-container">
						<div className="project-title">
							<span>{title}</span>
						</div>
						<div className="project-description">
							<span>{description}</span>
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			
		</div>
    );
}