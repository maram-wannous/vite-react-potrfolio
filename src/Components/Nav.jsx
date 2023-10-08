import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav(active) {
    return(
		<div className="container navbar">
			<div className="navbar-content">
				<ul className="nav-list">
					<li
						className={
							active === "home"
								? "nav-item active"
								: "nav-item"
						}
					>
						<NavLink to="/">Home</NavLink>
					</li>
					<li
						className={
							active === "about"
								? "nav-item active"
								: "nav-item"
						}
					>
						<NavLink to="/about">About</NavLink>
					</li>
					<li
						className={
							active === "projects"
								? "nav-item active"
								: "nav-item"
						}
					>
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<li
						className={
							active === "contact"
								? "nav-item active"
								: "nav-item"
						}
					>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</div>
		</div>
    );
}