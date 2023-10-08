import {
	faGithub,
	faInstagram,
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import projectimg1 from '../assets/project1.jpg'
import projectimg2 from '../assets/project2.jpg'
import projectimg3 from '../assets/project3.jpg'
const INFO = {

	main: {
		title: "Reactfolio by maram_wannous",
		name: "Maram W.",
		email: "maram.wannous@gmail.com",
	},

	socials: [
		{
			url: "https://github.com/maram-wannous",
			iconName: faGithub,
		},
		{
			url: "https://www.linkedin.com/in/maram-wannous-3bb5ba191",
			iconName: faLinkedin,
		},
		{
			url: "https://instagram.com/maram.wannous",
			iconName: faInstagram,
		},
		{
			url: "https://www.facebook.com/maram.wannous",
			iconName: faFacebook,
		},
	],

	homepage: {
		title: "Hello, I am a ",
		description:
			"I am a front-end developer with expertise in react.js. I have experience in building scalable, responsive and modern web designs using technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges.",
	},

	about: {
		title: "I'm Maram W. I live in Syria, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Travel website built with html5, css3 and javascript.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://maram-wannous.github.io/my_first_website/",
			projectimage: projectimg1,
		},

		{
			title: "Project 2",
			description:
				"Responsive Landing page built with react.js ",
			linkText: "View Project",
			link: "https://maram-wannous.github.io/maram_wannous_task1/",
			projectimage: projectimg2,
		},
		{
			title: "Project 3",
			description:
				"Education Platform built with React & Redux  ",
			linkText: "View Project",
			link: "https://maram-wannous.github.io/education-platform/",
			projectimage: projectimg3,
		},

	],
};

export default INFO;
